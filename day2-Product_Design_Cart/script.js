const descriptionContains = document.querySelector(".product-description");
const maxDescriptionLength = 83;
if (descriptionContains.textContent.length > maxDescriptionLength) {
  descriptionContains.textContent =
    descriptionContains.textContent.slice(0, maxDescriptionLength) + "...";
}
