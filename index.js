// to reduce  number of events called on scroll
function reduce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
let checkCrossSlide = e => {
  const item = document.querySelector('.skills_container');
  const slideInAt = window.scrollY + window.innerHeight - item.offsetHeight / 4,
    itemBottom = item.offsetTop + item.offsetHeight,
    isHalfShown = slideInAt > item.offsetTop,
    isNotScrolledPast = window.scrollY < itemBottom - 100;

  if (isHalfShown && isNotScrolledPast) {
    document.querySelector('.front').classList.add('activeSlide2');
    document.querySelector('.back').classList.add('activeSlide2');
  } else {
    document.querySelector('.front').classList.remove('activeSlide2');
    document.querySelector('.back').classList.remove('activeSlide2');
  }
};

const slideItems = document.querySelectorAll('.projects_container');
let checkSlide = e => {
  slideItems.forEach(item => {
    const slideInAt =
        window.scrollY + window.innerHeight - item.offsetHeight / 5,
      itemBottom = item.offsetTop + item.offsetHeight,
      isHalfShown = slideInAt > item.offsetTop - 150,
      isNotScrolledPast = window.scrollY < itemBottom - 100;

    if (isHalfShown && isNotScrolledPast) {
      document.querySelector('.dc').classList.add('activeSlide');
      document.querySelector('.weather').classList.add('activeSlide');
      document.querySelector('.auto').classList.add('activeSlide');
      document.querySelector('.clock').classList.add('activeSlide');
    } else {
      document.querySelector('.dc').classList.remove('activeSlide');
      document.querySelector('.weather').classList.remove('activeSlide');
      document.querySelector('.auto').classList.remove('activeSlide');
      document.querySelector('.clock').classList.remove('activeSlide');
    }
  });
};
window.addEventListener('scroll', reduce(checkSlide));
window.addEventListener('scroll', reduce(checkCrossSlide));
//sticky nav appearence after scrolling half a screen
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
document.querySelectorAll('.project').forEach(el => {
  el.addEventListener('click', e => {
    const icon = el.querySelector('.expand-icon');
    const moreel = el.querySelector('.more');
    console.log(icon);
    if (
      e.target.classList.contains('fa-times-circle') ||
      e.target.classList.contains('fade-in')
    ) {
      icon.classList.remove('hidden');
      moreel.classList.remove('fade-in');
    } else {
      icon.classList.add('hidden');
      moreel.classList.add('fade-in');
    }
  });
});
