const hamburgerMenu = document.querySelector('.hamburger-menu'),
  closeMenu = document.querySelector('.close-menu'),
  mobileNavbar = document.querySelector('.mobile-navbar')

closeMenu.addEventListener('click', function () {
  mobileNavbar.style.display = 'none';
});

hamburgerMenu.addEventListener('click', function () {
  mobileNavbar.style.display = 'block';
});

var swiper = new Swiper(".fourth-content", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});