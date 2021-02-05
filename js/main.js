$(document).ready(function() {
   flowersSlider = new Swiper('.flowers-slider', {
      // Optional parameters
      loop:          true,
      slidesPerView: 6,
      // Navigation arrows
      navigation: {
         nextEl: '.slider-button-next',
         prevEl: '.slider-button-prev',
      },
      // настройки адаптивной версии
      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 2,
         },
         480: {
            slidesPerView: 3,
         },
         576: {
            slidesPerView: 4,
         },
         768: {
            slidesPerView: 6,
         },
      },

   });
   const reviewsSlider = new Swiper('.reviews-slider', {
      loop:          true,
      slidesPerView: 1,
      navigation:    {
         nextEl: '.slider-button-next',
         prevEl: '.slider-button-prev',
      },
   });
   // настройка галереи
   $('#review-1').on('click', function() {
      $.fancybox.open([
         {
            src:  'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
            opts: {
               caption: 'First caption',
               thumb:   'https://source.unsplash.com/IvfoDk30JnI/240x160',
            },
         },
         {
            src:  'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
            opts: {
               caption: 'Second caption',
               thumb:   'https://source.unsplash.com/0JYgd2QuMfw/240x160',
            },
         },
      ], {
         loop:   true,
         thumbs: {
            autoStart: true,
         },
      });
   });

   $('.more').click(() => {
      $('.hidden').removeClass('hidden')
      $('.more').addClass('hidden')
   })


})


