// const container = document.querySelector('.container');

// console.log(container.innerHTML);
// console.log(container.textContent);
// container.innerHTML = 'This is your <strong>new content!</strong>';

const fill = document.querySelector('.animals');
// const into = document.querySelectorAll('p');
const body = document.getElementsByTagName('p');

// console.log(fill.textContent);

for (let i = 0; i < body.length; i++) {
    body[i].innerText = fill.innerText
}

for (let i = 0; i < body.length; i++) {
    body[i].innerHTML = fill.innerHTML
}






