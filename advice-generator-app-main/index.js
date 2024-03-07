const idElement = document.getElementById("id-no");
const adviceElement = document.getElementById("advice");
const dice = document.getElementById("dice");

dice.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      if (idElement && adviceElement) {
        idElement.innerHTML = data.slip.id;
        adviceElement.textContent = data.slip.advice;
      }
    })
    .catch((error) => {
      console.log("error fetching data");
    });
});