var a = document.getElementsByTagName('p')[0];
var b = document.getElementsByTagName('p')[1];
var c = document.getElementsByTagName('p')[2];
var d = document.getElementsByTagName('p')[3];

console.log(d.innerText);

function appleToPear() {
    if (d.innerText === "dolphin") {
        a.innerText = "pear"
    } else {}
}

appleToPear();

function dogWithCat() {
    if (a.innerText === "dolphin") {
        c.innerText = "dog"
    } else {}
}

dogWithCat();

a.classList.add('red');









