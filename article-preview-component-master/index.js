const icons = document.querySelector('.share-icons');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    icons.classList.toggle('active');
});