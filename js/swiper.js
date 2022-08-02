const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.controll-main-slider__arrow_next',
    prevEl: '.controll-main-slider__arrow_prev',
  },
  clikable: true,
  autoHeight: true,

});
