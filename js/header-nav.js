const burgerContainer = document.querySelector(".nav__burger-container");
const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__menu");

burger.addEventListener("click", () => {
  burgerContainer.classList.toggle("active");

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("show");
    burgerContainer.classList.remove("active");
  }
});
