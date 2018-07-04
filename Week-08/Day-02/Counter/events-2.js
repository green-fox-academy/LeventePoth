'use strict';

const pushButton = document.querySelector('.push');
const list = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
// const result = document.querySelector('.result');

var Array = [];

for (var i = 0; i < list.length; i++) {
    var arrayValue = list[i].innerHTML;
    console.log(arrayValue);
    Array.push(arrayValue);
}

console.log(Array.length)

pushButton.addEventListener('click', function() {
    document.querySelector('.result').innerHTML = `${Array.length}`;
});
  