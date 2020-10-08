"use strict";
window.addEventListener("load", () => {
  const arrowTop = document.querySelector(".fa-caret-up");
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  imgChange();

  navClickAnimaion();

  navClickMoveSection();
  if (document.body.clientWidth < 480) {
    scrollEffEctMobile(".about", "scroll-effect-about", ".about-title");
    scrollEffEctMobile(".about", "scroll-effect-about-me", ".about-me");
    scrollEffEctMobile(
      ".projects",
      "scroll-effect-projects",
      ".projects-title"
    );
  } else {
    scrollEffEct(".about", "scroll-effect-about", ".about-title");
    scrollEffEct(".about", "scroll-effect-about-me", ".about-me");
    scrollEffEct(".projects", "scroll-effect-projects", ".projects-title");
  }

  projectsEffect();

  arrowTop.addEventListener("click", () => {
    scrollToTop();
  });
});
