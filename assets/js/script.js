const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1.25 },
    425: { slidesPerView: 2 },
    660: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
  },
});
