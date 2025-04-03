const compnyContact = new Swiper(".compny-contact-swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1.3 },
    425: { slidesPerView: 2 },
    660: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
  },
});
const populerExcursions = new Swiper(".populer-excursions-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1.25 },
    660: { slidesPerView: 2 },
    1024: { slidesPerView: 2.5 },
    1280: { slidesPerView: 4 },
  },
});
