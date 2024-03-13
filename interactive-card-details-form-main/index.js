const form = document.getElementById("form");
const container = document.getElementById("form-container");
const thanks = document.getElementById("thanks-container");
const name = document.getElementById("name");
const errorName = document.getElementById("error-name");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cardNo = document.getElementById("card-Number");
const cvc = document.getElementById("cvc");

const cardDigits = document.getElementById("card_no");
const displayName = document.getElementById("display-name");

name.addEventListener("input", () => {
  displayName.textContent = name.value;
});

cardNo.addEventListener("input", () => {
  cardDigits.textContent = cardNo.value;
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

  const errorCVC = document.getElementById("error-cvc");
  if (cvc.value === "") {
    errorCVC.textContent = "Can't be black";
    isValid = false;
  } else {
    errorCVC.textContent = "";
  }

  const errorDate = document.getElementById("error-date");
  if (month.value === "" || year.value === "") {
    errorDate.textContent = "Can't be blank";
    isValid = false;
  } else {
    errorDate.textContent = "";
  }
  return isValid;
}
