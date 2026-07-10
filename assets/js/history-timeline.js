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
  var isDesktop = window.matchMedia('(min-width: 64rem)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isPlaying = false;
  var componentInView = false;
  var autoplayCall = null;
  var resumeCall = null;
  var scrollFrame = null;

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
    previousButton.disabled = index === 0;
    nextButton.disabled = index === events.length - 1;
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

  function scrollToEvent(index, manual) {
    index = Math.max(0, Math.min(index, events.length - 1));
    if (manual) pauseForManualInteraction();
    setActive(index, true);

    if (isDesktop) {
      var left = targetScrollLeft(index);
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollToPlugin !== 'undefined' && !reduceMotion) {
        window.gsap.to(scroller, {
          scrollTo: { x: left, autoKill: true },
          duration: 0.7,
          ease: 'power3.inOut',
          overwrite: 'auto'
        });
      } else {
        scroller.scrollTo({ left: left, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    } else {
      var top = targetScrollTop(index);
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollToPlugin !== 'undefined' && !reduceMotion) {
        window.gsap.to(scroller, {
          scrollTo: { y: top, autoKill: true },
          duration: 0.65,
          ease: 'power3.inOut',
          overwrite: 'auto'
        });
      } else {
        scroller.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
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
    scrollToEvent(currentIndex - 1, true);
  });

  nextButton.addEventListener('click', function () {
    scrollToEvent(currentIndex + 1, true);
  });

  scroller.addEventListener('keydown', function (event) {
    if (event.target !== scroller) return;
    var backwards = event.key === 'ArrowLeft' || (!isDesktop && event.key === 'ArrowUp');
    var forwards = event.key === 'ArrowRight' || (!isDesktop && event.key === 'ArrowDown');
    if (!backwards && !forwards) return;
    event.preventDefault();
    scrollToEvent(currentIndex + (forwards ? 1 : -1), true);
  });

  scroller.addEventListener('scroll', function () {
    queueNearestEvent();
    if (resumeCall) pauseForManualInteraction();
  }, { passive: true });

  scroller.addEventListener('wheel', function (event) {
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
      pauseForManualInteraction();
    }, { passive: true });
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoplay();
      cancelResume();
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
        },
        onLeaveBack: function () {
          componentInView = false;
          stopAutoplay();
          cancelResume();
        }
      });
    }
  }

  setActive(0, false);
}());
