// const form = document.getElementById('form');
// const name = document.getElementById('name');

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if(name === '') {
//         console.log('Please fill all the required fields')
//     }
// })

const foo  = (n) => {
    if(n <= 2) return 1;
    return foo(n - 1) + foo(n - 2);
}

console.log(foo(9));
console.log(foo(1));
console.log(foo(5));