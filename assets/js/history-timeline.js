(function () {
  'use strict';

  var root = document.querySelector('[data-history-timeline]');
  if (!root || root.dataset.historyReady === 'true') return;
  root.dataset.historyReady = 'true';

  var scroller = root.querySelector('[data-history-scroller]');
  var events = Array.from(root.querySelectorAll('[data-history-event]'));
  var previousButton = root.querySelector('[data-history-prev]');
  var nextButton = root.querySelector('[data-history-next]');
  var currentIndex = 0;
  var requestedIndex = 0;
  var isDesktop = window.matchMedia('(min-width: 64rem)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isPlaying = false;
  var componentInView = false;
  var autoplayCall = null;
  var resumeCall = null;
  var scrollFrame = null;
  var scrollTween = null;

  function stopAutoplay() {
    if (autoplayCall) {
      autoplayCall.kill();
      autoplayCall = null;
    }
    isPlaying = false;
  }

  function cancelResume() {
    if (resumeCall) {
      resumeCall.kill();
      resumeCall = null;
    }
  }

  function updateControls(index) {
    previousButton.disabled = index === 0;
    nextButton.disabled = index === events.length - 1;
  }

  function cancelScrollAnimation() {
    if (scrollTween) {
      scrollTween.kill();
      scrollTween = null;
    }
    scroller.style.removeProperty('scroll-snap-type');
  }

  function animateBubble(index) {
    if (reduceMotion || typeof window.gsap === 'undefined') return;
    var bubble = events[index].querySelector('[data-history-bubble]');
    window.gsap.fromTo(
      bubble,
      { autoAlpha: 0.76 },
      {
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power1.out',
        overwrite: 'auto',
        clearProps: 'opacity,visibility'
      }
    );
  }

  function setActive(index, animate) {
    index = Math.max(0, Math.min(index, events.length - 1));

    events.forEach(function (event, eventIndex) {
      var active = eventIndex === index;
      event.dataset.active = active ? 'true' : 'false';
      event.querySelector('[data-history-bubble]').dataset.active = active ? 'true' : 'false';
      event.querySelector('[data-history-dot]').dataset.active = active ? 'true' : 'false';
      event.querySelector('[data-history-arrow]').dataset.active = active ? 'true' : 'false';
      if (active) event.setAttribute('aria-current', 'step');
      else event.removeAttribute('aria-current');
    });

    var changed = index !== currentIndex;
    currentIndex = index;
    updateControls(scrollTween ? requestedIndex : index);
    if (animate && changed) animateBubble(index);
    if (index === events.length - 1) {
      stopAutoplay();
    }
  }

  function nearestEvent() {
    var scrollerRect = scroller.getBoundingClientRect();
    var viewportCenter = isDesktop
      ? scrollerRect.left + (scroller.clientWidth / 2)
      : scrollerRect.top + (scroller.clientHeight / 2);
    var nearestIndex = 0;
    var nearestDistance = Infinity;

    events.forEach(function (event, index) {
      var rect = event.getBoundingClientRect();
      var eventCenter = isDesktop ? rect.left + (rect.width / 2) : rect.top + (rect.height / 2);
      var distance = Math.abs(eventCenter - viewportCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActive(nearestIndex, nearestIndex !== currentIndex);
    if (!scrollTween) requestedIndex = nearestIndex;
  }

  function queueNearestEvent() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(function () {
      scrollFrame = null;
      nearestEvent();
    });
  }

  function targetScrollLeft(index) {
    var event = events[index];
    return event.offsetLeft - (scroller.clientWidth / 2) + (event.offsetWidth / 2);
  }

  function targetScrollTop(index) {
    var event = events[index];
    return event.offsetTop - (scroller.clientHeight / 2) + (event.offsetHeight / 2);
  }

  function animateScrollTo(index) {
    cancelScrollAnimation();
    scroller.style.scrollSnapType = 'none';
    var destination = isDesktop ? { x: targetScrollLeft(index) } : { y: targetScrollTop(index) };
    var tween = window.gsap.to(scroller, {
      scrollTo: Object.assign(destination, { autoKill: true }),
      duration: isDesktop ? 0.7 : 0.65,
      ease: 'power3.inOut',
      overwrite: true,
      onComplete: function () {
        if (scrollTween !== tween) return;
        scrollTween = null;
        scroller.style.removeProperty('scroll-snap-type');
        setActive(index, true);
        requestedIndex = index;
        updateControls(index);
      }
    });
    scrollTween = tween;
  }

  function scrollToEvent(index, manual) {
    index = Math.max(0, Math.min(index, events.length - 1));
    requestedIndex = index;
    if (manual) pauseForManualInteraction();
    setActive(index, true);
    updateControls(index);

    if (typeof window.gsap !== 'undefined' && typeof window.ScrollToPlugin !== 'undefined' && !reduceMotion) {
      animateScrollTo(index);
    } else if (isDesktop) {
      scroller.scrollTo({ left: targetScrollLeft(index), behavior: reduceMotion ? 'auto' : 'smooth' });
    } else {
      scroller.scrollTo({ top: targetScrollTop(index), behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  function scheduleAutoplay() {
    if (!isPlaying || !componentInView || document.hidden || reduceMotion || currentIndex >= events.length - 1) return;
    if (autoplayCall) autoplayCall.kill();
    autoplayCall = window.gsap.delayedCall(6, function () {
      autoplayCall = null;
      scrollToEvent(currentIndex + 1, false);
      scheduleAutoplay();
    });
  }

  function startAutoplay(advanceImmediately) {
    if (reduceMotion || !componentInView || document.hidden || typeof window.gsap === 'undefined') return;
    if (currentIndex >= events.length - 1) return;
    cancelResume();
    isPlaying = true;
    if (advanceImmediately) scrollToEvent(currentIndex + 1, false);
    scheduleAutoplay();
  }

  function pauseForManualInteraction() {
    stopAutoplay();
    cancelResume();
    if (reduceMotion || typeof window.gsap === 'undefined') return;
    resumeCall = window.gsap.delayedCall(5, function () {
      resumeCall = null;
      startAutoplay(true);
    });
  }

  previousButton.addEventListener('click', function () {
    scrollToEvent(requestedIndex - 1, true);
  });

  nextButton.addEventListener('click', function () {
    scrollToEvent(requestedIndex + 1, true);
  });

  scroller.addEventListener('keydown', function (event) {
    if (event.target !== scroller) return;
    var backwards = event.key === 'ArrowLeft' || (!isDesktop && event.key === 'ArrowUp');
    var forwards = event.key === 'ArrowRight' || (!isDesktop && event.key === 'ArrowDown');
    if (!backwards && !forwards) return;
    event.preventDefault();
    scrollToEvent(requestedIndex + (forwards ? 1 : -1), true);
  });

  scroller.addEventListener('scroll', function () {
    queueNearestEvent();
    if (resumeCall) pauseForManualInteraction();
  }, { passive: true });

  scroller.addEventListener('wheel', function (event) {
    cancelScrollAnimation();
    requestedIndex = currentIndex;
    pauseForManualInteraction();
    if (!isDesktop || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    var movingForward = event.deltaY > 0;
    var canMove = movingForward
      ? scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth - 1
      : scroller.scrollLeft > 1;
    if (!canMove) return;
    event.preventDefault();
    scroller.scrollLeft += event.deltaY;
  }, { passive: false });

  ['pointerdown', 'touchstart'].forEach(function (eventName) {
    scroller.addEventListener(eventName, function () {
      cancelScrollAnimation();
      requestedIndex = currentIndex;
      pauseForManualInteraction();
    }, { passive: true });
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoplay();
      cancelResume();
      cancelScrollAnimation();
    } else if (componentInView) {
      startAutoplay(false);
    }
  });

  if (typeof window.gsap !== 'undefined') {
    if (typeof window.ScrollTrigger !== 'undefined' && typeof window.ScrollToPlugin !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin);
    }

    var media = window.gsap.matchMedia();
    media.add({
      desktop: '(min-width: 64rem)',
      reduceMotion: '(prefers-reduced-motion: reduce)'
    }, function (context) {
      isDesktop = context.conditions.desktop;
      reduceMotion = context.conditions.reduceMotion;
      stopAutoplay();
      cancelResume();
      cancelScrollAnimation();
      requestedIndex = currentIndex;
      window.requestAnimationFrame(nearestEvent);
    });

    if (typeof window.ScrollTrigger !== 'undefined') {
      window.ScrollTrigger.create({
        id: 'group-history-autoplay',
        trigger: root,
        start: 'top 75%',
        end: 'bottom 25%',
        onEnter: function () {
          componentInView = true;
          startAutoplay(false);
        },
        onEnterBack: function () {
          componentInView = true;
          startAutoplay(false);
        },
        onLeave: function () {
          componentInView = false;
          stopAutoplay();
          cancelResume();
          cancelScrollAnimation();
        },
        onLeaveBack: function () {
          componentInView = false;
          stopAutoplay();
          cancelResume();
          cancelScrollAnimation();
        }
      });
    }
  }

  setActive(0, false);
}());
