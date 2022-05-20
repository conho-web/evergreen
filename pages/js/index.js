window.addEventListener('load', (event) => {
  // Services Swiper
  let servicesSwiper = new Swiper('.services-swiper', {
    loop: true,
    pagination: {
      el: '.services-swiper-pagination',
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 60,
  });

  // Reviews Swiper
  let reviewsSwiper = new Swiper('.reviews-swiper', {
    loop: true,
    pagination: {
      el: '.reviews-swiper-pagination',
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 150,
  });
});