const next = document.getElementById("nextBtn");
const back = document.getElementById("backBtn");
const steps = document.querySelectorAll('.step');
let currentStep = 1;

function updateStep(step) {
  steps.forEach((s, index) => {
    if (index + 1 === step) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
  currentStep = step;
}


next.addEventListener('click', () => {
  if(currentStep < steps.length) {
    updateStep(currentStep + 1)
    return
  }
})

back.addEventListener('click', () => {
  if (currentStep > 1) {
    updateStep(currentStep - 1)
  }
})
