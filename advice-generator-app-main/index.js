const id=document.getElementById("id");
const advice=document.getElementById("advice");
const dice=document.querySelector(".dice");

dice.addEventListener('click', () => {
    fetch('https://api.adviceslip.com')
        .then(res => res.json())
        .then(data => {
            id.innerHTML = data.slip.id;
            advice.textContent = data.slip.advice
        })
})

