const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    alert("Successfully submitted!");
  }
});

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name");
  const errorName = document.getElementById("error-name");
  if (name.value === "") {
    errorName.textContent = "Please enter your name";
    isValid = false;
  } else {
    errorName.textContent = "";
  }

  const cardNo = document.getElementById("card-Number");
  const errorNo = document.getElementById("error-no");
  if (cardNo.value === "") {
    errorNo.textContent = "Wrong format numbers only";
    isValid = false;
  } else {
    errorNo.textContent = "";
  }

  return isValid;
}
