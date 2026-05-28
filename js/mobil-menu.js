const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const burgerIcon = document.getElementById("burgerIcon");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // CHANGE ICON

  if (mobileMenu.classList.contains("active")) {
    burgerIcon.src = "../public/assets/backgrounds/close-icon.png";
  } else {
    burgerIcon.src = "../public/assets/backgrounds/menu-mobile.svg";
  }
});
