const form = document.getElementById('form');
const name = document.getElementById('name');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(name === '') {
        console.log('Please fill all the required fields')
    }
})