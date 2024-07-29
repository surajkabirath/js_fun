document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".icon");

    if (answer.classList.contains("show")) {
      answer.classList.remove("show");
      icon.innerHTML = '<path d="M12 19l-7-7h14l-7 7z" fill="currentColor"/>';
    }else{
        document.querySelectorAll(".answer").forEach(e=>e.classList.remove("show"));
        document.querySelectorAll(".icon").forEach(i => i.innerHTML='<path d="M12 19l-7-7h14l-7 7z" fill="currentColor"/>')
    }
  });
});
