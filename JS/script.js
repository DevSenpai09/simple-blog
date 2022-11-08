// Mobile Navigation
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const sideNav = document.getElementById("side_nav");
let isNav = false;

const toggleNav = () => {
  isNav = !isNav;
  if (isNav) {
    sideNav.classList.add("show");
    menu.classList.remove("active");
    close.classList.add("active");
    return;
  }
  menu.classList.add("active");
  close.classList.remove("active");
  sideNav.classList.remove("show");
};
// End Mobile Navigation

// Slide
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
slides = [...slides];
dots = [...dots];
let slideIn = 0;
let slideOut;

setInterval(() => {
  if (slideIn == 2) {
    slideIn = 0;
    slides[2].classList.add("out");
    slides[2].classList.remove("in");
    slides[slideIn].classList.add("in");
    dots[2].classList.remove("active");
    dots[slideIn].classList.add("active");
    return;
  }
  slideIn += 1;
  if (slideIn == 1) slideOut = 0;
  slides[slideIn - 1].classList.add("out");
  slides[slideIn - 1].classList.remove("in");
  slides[slideIn].classList.add("in");
  dots[slideIn - 1].classList.remove("active");
  dots[slideIn].classList.add("active");

  setTimeout(() => {
    slides.map((slide) => {
      if (slide.classList.contains("out")) {
        slide.classList.remove("out");
      }
    });
  }, 3000);
}, 5000);
// End SLide
