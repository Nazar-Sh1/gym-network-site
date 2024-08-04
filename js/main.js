// Отримати всі кнопки аккордеона
const accordionButtons = document.querySelectorAll('.faq__accordion-button');

// Додати обробник подій для кожної кнопки
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Отримати відповідний контент для цієї кнопки
    const content = button.nextElementSibling;

    // Перевірити, чи вже відкритий цей контент
    if (content.style.display === 'block') {
      // Якщо контент відкритий, сховати його
      content.style.display = 'none';
    } else {
      // Якщо контент закритий, спочатку сховати всі інші контенти
      document.querySelectorAll('.faq__accordion-content').forEach(item => {
        item.style.display = 'none';
      });

      // Потім показати цей контент
      content.style.display = 'block';
    }
  });
});
