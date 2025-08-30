(function($) {
  "use strict"; // Start of use strict

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $('.parallax-background').jarallax({
    speed: 0.5,
    imgWidth: 1366,
    imgHeight: 768
    });
  
  if ($.fn.simpleLightbox) {
    $('.image-gallery a').simpleLightbox();
  }
  
  // Disable Google Maps scrolling
  // See http://stackoverflow.com/a/25904582/1607849
  // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function(event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }
  var onMapClickHandler = function(event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }
  // Enable map zooming with mouse scroll when the user clicks the map
  $('.map').on('click', onMapClickHandler);

  // Add some interactive hover effects to the scout badges
  $(".scout-badge").hover(function(){
    $(this).css({"transform": "scale(1.05) rotate(10deg)"});
    }, function(){
    $(this).css({"transform": "scale(1) rotate(0deg)"});
  });
})(jQuery); // End of use strict