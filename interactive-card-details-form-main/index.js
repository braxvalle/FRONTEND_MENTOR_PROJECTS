<<<<<<< HEAD
const form = document.getElementById("form");
const container = document.getElementById("form-container");
const thanks = document.getElementById("thanks-container");
const name = document.getElementById("name");
const errorName = document.getElementById("error-name");

const displayName = document.getElementById("display-name");

name.addEventListener("input", () => {
  displayName.textContent = name.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    container.style.display = "none";
    thanks.style.display = "block";
  }
});

function validateForm() {
  let isValid = true;

  if (name.value === "") {
    errorName.textContent = "Please enter your name";
    isValid = false;
  } else {
    errorName.textContent = "";
  }

  const cardNo = document.getElementById("card-Number");
  const errorNo = document.getElementById("error-no");
  if (cardNo.value === "") {
    errorNo.textContent = "Please enter your card number";
    isValid = false;
  } else if (!/^\d+$/.test(cardNo.value)) {
    errorNo.textContent = "Wrong format numbers only";
    isValid = false;
  } else {
    errorNo.textContent = "";
  }

  const cvc = document.getElementById("cvc");
  const errorCVC = document.getElementById("error-cvc");
  if (cvc.value === "") {
    errorCVC.textContent = "Can't be black";
    isValid = false;
  } else {
    errorCVC.textContent = "";
  }
  return isValid;
}
=======
const form = document.getElementById('form');
const name = document.getElementById('name');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(name === '') {
        console.log('Please fill all the required fields')
    }
})
>>>>>>> f2fa45a6d65d64586528e1b07df0930e4aedb3ca
