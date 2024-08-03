const burgerContainer = document.querySelector(".nav__burger-container");
const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__menu");

// Додаємо обробник події натискання на бургер
burger.addEventListener("click", () => {
  // Переключаємо клас .active на контейнері бургер-меню
  burgerContainer.classList.toggle("active");

  // Якщо меню вже відкрито, закриваємо його
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    // Інакше відкриваємо меню
    menu.classList.add("show");
  }
});

// Додаємо обробник події кліку поза меню
document.addEventListener("click", (e) => {
  // Якщо клік був поза меню, закриваємо його
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("show");
    burgerContainer.classList.remove("active");
  }
});
