const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.problems-button-next',
    prevEl: '.problems-button-prev',
  },
});