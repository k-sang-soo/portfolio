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

function imgChange() {
  const change = document.querySelector(".main-img > img");
  const target = document.querySelector(".about");
  /* eslint-disable */
  if (document.body.clientWidth < 480) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > target.getBoundingClientRect().top) {
        change.setAttribute("src", "img/change2.jpg");
      }
    });
  } else {
    change.addEventListener("mouseenter", () => {
      change.setAttribute("src", "img/change2.jpg");
    });
    change.addEventListener("mouseleave", () => {
      change.setAttribute("src", "img/me.jpg");
    });
  }

  /* eslint-enable */
}

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

function scrollEffEct(target, addClass, optTarget) {
  const targets = document.querySelector(target);
  const optTargets = document.querySelector(optTarget);
  let winY;
  window.addEventListener("scroll", () => {
    let winY = window.pageYOffset;
    let targetTop = targets.getBoundingClientRect().top;
    // console.log("winY :", winY);
    // console.log("scroll / 2 : ", winY / 2);
    console.log("targetTop:", targetTop);
    console.log("targetTop / 2:", targetTop / 2);
    if (targetTop < winY / 2 && !optTargets.classList.contains(addClass)) {
      console.log("스크롤");
      optTargets.classList.add(addClass);
    }
  });
}

function scrollEffEct(target, addClass, optTarget) {
  const targets = document.querySelector(target);
  const optTargets = document.querySelector(optTarget);
  let winY;
  window.addEventListener("scroll", () => {
    let winY = window.pageYOffset;
    let targetTop = targets.getBoundingClientRect().top;
    if (targetTop < winY / 2 && !optTargets.classList.contains(addClass)) {
      optTargets.classList.add(addClass);
    }
  });
}

function scrollEffEctMobile(target, addClass, optTarget) {
  const targets = document.querySelector(target);
  const optTargets = document.querySelector(optTarget);
  let winY;
  window.addEventListener("scroll", () => {
    let winY = window.pageYOffset;
    let targetTop = targets.getBoundingClientRect().top;
    if (targetTop < winY / 5 && !optTargets.classList.contains(addClass)) {
      optTargets.classList.add(addClass);
    }
  });
}

function scrollToTop() {
  const scroll = window.setInterval(function () {
    const windowY = window.pageYOffset;
    const stop = 50;
    if (windowY > 0) {
      window.scrollTo(0, windowY - stop);
    } else {
      window.clearInterval(scroll);
    }
  }, 5);
}

function projectsEffect() {
  const projectsItem = document.querySelectorAll(".item-position");
  const effects = document.querySelectorAll(".projects-item_sub");
  projectsItem.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      console.log(effects[index]);
      effects[index].classList.add("enter-effect");
    });
    item.addEventListener("mouseleave", () => {
      effects[index].classList.remove("enter-effect");
    });
  });
}
