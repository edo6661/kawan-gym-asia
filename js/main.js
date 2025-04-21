const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
