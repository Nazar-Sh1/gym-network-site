const accordionButtons = document.querySelectorAll(".faq__accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      document.querySelectorAll(".faq__accordion-content").forEach((item) => {
        item.style.display = "none";
      });

      content.style.display = "block";
    }
  });
});
