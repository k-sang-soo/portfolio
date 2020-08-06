"use strict";
window.addEventListener("load", () => {
  const arrowTop = document.querySelector(".fa-caret-up");
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  imgChange();
  navClickAnimaion();
  navClickMoveSection();
  projectsEffect();
  arrowTop.addEventListener("click", () => {
    scrollToTop();
  });
});
