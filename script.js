const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");
const mobileMenu = document.getElementById("mobileMenu");

menuOpenBtn.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

menuCloseBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});


/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
