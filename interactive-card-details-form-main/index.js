const form = document.getElementById("form");
const container = document.getElementById("form-container");
const thanks = document.getElementById("thanks-container");
const name = document.getElementById("name");
const errorName = document.getElementById("error-name");
const cvc = document.getElementById("cvc");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cardNo = document.getElementById("card-Number");

const displayName = document.getElementById("display-name");
const cvcText = document.getElementById('cvc-text');
const monthText = document.getElementById('month-text');
const yearText = document.getElementById('year-text');
const cardNumber = document.getElementById('card-number');

name.addEventListener("input", () => {
  displayName.textContent = name.value;
});

cvc.addEventListener('input', () => {
  cvcText.textContent = cvc.value;
})

cardNo.addEventListener('input', () => {
  cardNumber.textContent = cardNo.value;
})

month.addEventListener('input', () => {
  monthText.textContent = month.value
})

year.addEventListener('input', () => {
  yearText.textContent = year.value
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    container.style.display = "none";
    thanks.style.display = "flex";
  }
});

function validateForm() {
  let isValid = true;

  if (name.value === "") {
    errorName.textContent = "Please enter your name";
    name.style.border = "1px solid red"
    isValid = false;
  } else {
    errorName.textContent = "";
    name.style.border = "1px solid #8e8593"
  }
  
  const errorNo = document.getElementById("error-no");
  if (cardNo.value === "") {
    errorNo.textContent = "Please enter your card number";
    cardNo.style.border = "1px solid red"
    isValid = false;
  } else if (!/^\d+$/.test(cardNo.value)) {
    errorNo.textContent = "Wrong format numbers only";
    isValid = false;
  } else if (cardNo.value.length !== 16) {
    errorNo.textContent = "Card number must be 16 Numbers"
  } else {
    errorNo.textContent = "";
    cardNo.style.border = "1px solid #8e8593"
  }
  
  const errorCVC = document.getElementById("error-cvc");
  if (cvc.value === "") {
    errorCVC.textContent = "Can't be black";
    cvc.style.border = "1px solid red"
    isValid = false;
  } else {
    errorCVC.textContent = "";
    cvc.style.border = "1px solid #8e8593"

  }

  const errorDate = document.getElementById('error-date');
  if(year.value === '' || month.value === '') {
    errorDate.textContent = "Can't be blank";
    year.style.border = "1px solid red"
    month.style.border = "1px solid red"
    isValid = false;
  } else {
    errorDate.textContent = '';
    year.style.border = "1px solid #8e8593"
    month.style.border = "1px solid #8e8593"
  }

  return isValid;
}
