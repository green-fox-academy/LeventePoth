const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.querySelectorAll('p.big, div.big');

for (let i = 0; i < businessLamp.length; i++) {
    console.log(businessLamp[i]);
}

const conceitedKing = document.querySelectorAll('section.container div');

for (let i = 0; i < conceitedKing.length; i++) {
    alert(conceitedKing[i].innerHTML);
}

const noBussiness = document.querySelectorAll('div');

for (let i = 0; i < noBussiness.length; i++) {
    console.log(noBussiness[i]);
}