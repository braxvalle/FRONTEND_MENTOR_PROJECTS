const next = document.getElementById("nextBtn");
const back = document.getElementById("backBtn");
const steps = document.querySelectorAll(".step");
let currentStep = 1;

function updateStep(step) {
  steps.forEach((s, index) => {
    if (index === step) {
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
  }
})

back.addEventListener('click', () => {
  if (currentStep > 1) {
    updateStep(currentStep - 1)
  }
})

// Toggle button functions:
const slider = document.querySelector('.slider');
const months = document.querySelector('.swi-month');
const years = document.querySelector('.swi-year');

slider.addEventListener('click', () => {
  slider.classList.toggle('clicked')

  if(slider.classList.contains('clicked')) {
    months.classList.add('active')
    years.classList.remove('active')
  } else {
    months.classList.remove('active')
    years.classList.add('active')
  }
});

