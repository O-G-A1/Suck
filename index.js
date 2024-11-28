setTimeout(() => {
  document.getElementById("loadscreen").style.display = "none";

  document.getElementById("maincontent").style.display = "block";
}, 300);

function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  const hamburger = document.querySelector(".bar_menu");

  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
    gap: "2rem",
  }).mount();
});
