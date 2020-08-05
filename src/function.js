"use strict";

let windowH;

(function () {
  const resize = new Event("resize");
  window.addEventListener(
    "resize",
    () => {
      windowH = window.innerHeight;
    },
    false
  );
  window.dispatchEvent(resize);
})();

function navClickAnimaion() {
  const navIcon = document.querySelector(".nav-icon");
  const iconItems = document.querySelectorAll(".icons > div");
  const navlist = document.querySelector(".nav");

  navIcon.addEventListener("click", () => {
    navlist.classList.toggle("nav-view");
    iconItems[0].classList.toggle("nav-view-ani");
    iconItems[1].classList.toggle("nav-view-ani");
    iconItems[2].classList.toggle("nav-view-ani");
  });
}

function navClickMoveSection() {
  const nav = document.querySelectorAll(".nav > li");
  const aboutTop = document.querySelector(".about").getBoundingClientRect().top;
  const projectsTop = document
    .querySelector(".projects")
    .getBoundingClientRect().top;
  const contactTop = document.querySelector(".footer").getBoundingClientRect()
    .top;

  console.log(aboutTop);

  [...nav].forEach((item, index) => {
    item.addEventListener("click", () => {
      switch (index) {
        case 0:
          window.scrollTo({
            top: aboutTop,
            behavior: "smooth",
          });
          break;
        case 1:
          window.scrollTo({
            top: projectsTop,
            behavior: "smooth",
          });
          break;
        case 2:
          window.scrollTo({
            top: contactTop,
            behavior: "smooth",
          });
          break;
          defalut: break;
      }
    });
  });
}

function moveTop() {
  const arrowTop = document.querySelector(".fa-caret-up");
  arrowTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
