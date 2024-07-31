const progressBar = document.getElementById('progress-bar');
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentStep = 1;

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateProgressBar();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgressBar();
  }
});

function updateProgressBar() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
  progressBar.style.width = progressPercentage + '%';
}

updateProgressBar();
