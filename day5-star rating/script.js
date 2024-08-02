const stars = document.querySelectorAll(".fa-star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    highlightedStar(index);
    console.log("Stars Click");
  });

  star.addEventListener("mouseover", () => {
    highlightOnHover(index);
    console.log("highlightOnHover");
  });

  star.addEventListener("mouseout", () => {
    removeHighlight();
    console.log("removeHighLight")
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
// function highlightedStar(index) {
//     for (let i = 0; i < stars.length; i++) {
//       if (i <= index) {
//         stars[i].classList.add("checked");
//       } else {
//         stars[i].classList.remove("checked");
//       }
//     }
//   }
  
function highlightOnHover(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("hovered");
    } else {
      star.classList.remove("hovered");
    }
  });
}

function removeHighlight() {
  stars.forEach((star) => {
    star.classList.remove("hovered");
  });
}
