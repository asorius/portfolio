(function($) {
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $('.sticky-nav').fadeIn(500);
      } else {
        $('.sticky-nav').fadeOut(500);
      }
    });
  });
})(jQuery);
