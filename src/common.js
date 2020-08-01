window.addEventListener("load", () => {
  const navIcon = document.querySelector(".nav-icon");
  const iconItems = document.querySelectorAll(".icons > div");
  const navlist = document.querySelector(".nav");
  navIcon.addEventListener("click", () => {
    console.log(iconItems[0]);
    navlist.classList.toggle("nav-view");
    iconItems[0].classList.toggle("nav-view-ani");
    iconItems[1].classList.toggle("nav-view-ani");
    iconItems[2].classList.toggle("nav-view-ani");
  });
});
