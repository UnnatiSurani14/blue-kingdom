// toggle
let toggle = document.getElementById("toggle");
let nav = document.getElementById("navbar");

toggle.addEventListener("click", function () {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
    nav.style.backgroundColor = "#142C58";
  } else {
    nav.style.display = "none";
  }
});

// compny-contact
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

// populer-excursions
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

// tab-slider
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons[0].style.borderBottom = "2px solid #142C58";
  contents[0].classList.remove("hidden");

  buttons.forEach((button, i) => {

    button.addEventListener("click", function () {
      contents.forEach((content) => content.classList.add("hidden"));
      const target = document.getElementById(this.dataset.tab);
      target.classList.remove("hidden");

      buttons.forEach((btn) => (btn.style.borderBottom = "none"));
      this.style.borderBottom = "2px solid #142C58";
    });
  });
});

