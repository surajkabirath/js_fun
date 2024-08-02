document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.fa-star');

    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const index = Array.from(stars).indexOf(star);

            stars.forEach((s, i) => {
                s.classList.toggle('checked', i <= index);
            });
        });
    });
});