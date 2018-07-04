// const littlePrince = document.querySelector('img');

// console.log(littlePrince.getAttribute('src'));
// c

const fox = document.querySelector('img');

// console.log(fox.getAttribute('src'));

fox.setAttribute('src', 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg');

// var a = document.createElement('a');
// var linkText = document.createTextNode("greenfox");
// a.appendChild(linkText);
// a.title = "greenfox";
// a.href = "http://www.greenfoxacademy.com";
// document.body.appendChild(a);

var a = document.getElementsByTagName('a')[0];
a.setAttribute('href', 'http://www.greenfoxacademy.com');

document.getElementsByClassName("this-one").disabled = true;

// const secondButton = document.getElementsByClassName("this-one");

document.getElementsByClassName("this-one")[0].innerHTML=
   "Don't click me!";











