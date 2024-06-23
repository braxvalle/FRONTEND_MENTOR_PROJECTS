const next = document.querySelector("#nextBtn");
const nextBtns = document.querySelectorAll(".nextBtn");
const backs = document.querySelectorAll(".backBtn");
const steps = document.querySelectorAll(".step");

let currentStep = 0;

//form section
next.addEventListener('click', (e) => {
  const form = document.querySelector('#form');

  if(currentStep < steps.length && validateForm()) {
    updateStep(currentStep + 1)
    e.preventDefault()
  } else {
    e.preventDefault()
    console.log('Form is valid')
  }

  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    document.getElementById('error-name').innerHTML = "";
    document.getElementById('error-email').innerHTML = "";
    document.getElementById('error-phone').innerHTML = "";
  
    let isValid = true;
  
    if(name === '') {
      document.getElementById('error-name').textContent = "This field is required";
      isValid = false;
    }
    if(email === '') {
      document.getElementById('error-email').textContent = "This field is required";
      isValid = false;
    }
    if(phone === '') {
      document.getElementById('error-phone').textContent = "This field is required";
      isValid = false;
    }
    return isValid;
  }
})


function updateStep(step) {
  steps.forEach((s, index) => {
    if (index === step) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  currentStep = step;

  nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener('click', () => {
      if(currentStep < 4) {
        updateStep(currentStep + 1)
      }
      console.log('Clicked')
    })
    
  })

  backs.forEach((back) => {
    back.addEventListener('click', () => {
      if (currentStep > 0) {
        updateStep(currentStep - 1)
      }
      console.log('Clicked')
    })
  })
}

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