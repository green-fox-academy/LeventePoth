const array = ['apple', 'banana', 'cat', 'dog'];

const body = document.getElementsByTagName('li');

for (let i = 0; i < body.length; i++) {
        body[i].innerText = array[i]
}

const hatter = document.querySelector('ul');

hatter.style.background = 'limegreen'



