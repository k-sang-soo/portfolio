"use strict";
window.addEventListener("load", () => {
  const arrowTop = document.querySelector(".fa-caret-up");
  imgChange();
  navClickAnimaion();
  navClickMoveSection();
  projectsEffect();
  arrowTop.addEventListener("click", () => {
    scrollToTop();
  });
});
