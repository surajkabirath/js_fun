const stars = document.querySelectorAll(".fa-star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    highlightedStar(index);
    console.log("Stars Click");
  });
});

function highlightedStar(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("checked");
    } else {
      star.classList.remove("checked");
    }
  });
}
