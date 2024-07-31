// const steps = document.querySelectorAll('.step');
// const progressBar = document.getElementById('progress-bar');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentStep = 1;

// nextBtn.addEventListener('click', () => {
//     currentStep++;
//     if (currentStep > steps.length) {
//         currentStep = steps.length;
//     }
//     updateSteps();
//     updateProgressBar();
// });

// prevBtn.addEventListener('click', () => {
//     currentStep--;
//     if (currentStep < 1) {
//         currentStep = 1;
//     }
//     updateSteps();
//     updateProgressBar();
// });

// function updateSteps() {
//     steps.forEach((step, index) => {
//         if (index < currentStep) {
//             step.classList.add('completed');
//             step.classList.remove('active');
//         } else if (index === currentStep - 1) {
//             step.classList.add('active');
//             step.classList.remove('completed');
//         } else {
//             step.classList.remove('active', 'completed');
//         }
//     });

//     prevBtn.disabled = currentStep === 1;
//     nextBtn.disabled = currentStep === steps.length;
// }

// function updateProgressBar() {
//     progressBar.style.width = ((currentStep - 1) / (steps.length - 1)) * 100 + '%';
// }


