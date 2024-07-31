const descriptionContains = document.querySelector(".product-description");
const maxDescriptionLength = 150;
if (descriptionContains.textContent.length > maxDescriptionLength) {
  descriptionContains.textContent =
    descriptionContains.textContent.slice(0, maxDescriptionLength) + "...";
}


// pop up
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

var fullscreenOverlay = document.createElement("div");
fullscreenOverlay.classList.add("fullscreen-overlay");
document.body.appendChild(fullscreenOverlay);

var fullscreenImg = document.createElement("img");
fullscreenOverlay.appendChild(fullscreenImg);

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const imgBtns = document.querySelectorAll(".img-select a");
const imgShowcase = document.querySelector(".img-showcase");
const imgShowcaseImages = document.querySelectorAll(".img-showcase img");

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        const id = imgItem.dataset.id;
        imgShowcase.style.transform = `translateX(${-(id - 1) * 100}%)`;
    });
});

imgShowcaseImages.forEach((img) => {
    img.addEventListener("click", (event) => {
        fullscreenImg.src = img.src;
        fullscreenOverlay.style.display = "flex";
    });
});

fullscreenOverlay.addEventListener("click", () => {
    fullscreenOverlay.style.display = "none";
});