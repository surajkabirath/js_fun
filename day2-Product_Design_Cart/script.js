const descriptionElement = document.querySelector(".product-description");
const maxLength = 84;

if (descriptionElement.textContent.length > maxLength) {
  descriptionElement.textContent =
    descriptionElement.textContent.slice(0, maxLength) + "...";
}
