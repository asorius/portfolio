(function($) {
  $(document).ready(function() {
    const initialWidth = window.innerWidth;
    let divider;
    $(window).scroll(function() {
      initialWidth <= 765 ? (divider = 1.2) : (divider = 2);
      if ($(this).scrollTop() > $(window).height() / divider) {
        $('.sticky-nav').fadeIn(500);
      } else {
        $('.sticky-nav').fadeOut(500);
      }
    });
  });
})(jQuery);
