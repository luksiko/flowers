const flowersSlider = new Swiper('.flowers-slider', {
   // Optional parameters
   loop:          true,
   slidesPerView: 6,
   // Navigation arrows
   navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
   },
});
const reviewsSlider = new Swiper('.reviews-slider', {
   loop:          true,
   slidesPerView: 1,
   navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
   },
});
