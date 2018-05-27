'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

// let size: number = 0;               
// function drawing2 (i, size) {       //a drawing2 funkciója itt csak rajzolni
//     ctx.fillRect(i, i, size, size);
// }
// for (let i = 0; i < 400; i+=size) {  // a for loop-val meghívjuk mindig a drawingot
//     size+=20;                       
//     drawing2(i, size);
// }                                   // a for ciklus folyamatos, i=400-ig megy

// // lemegyünk egyett, felmegyünk eggyett. i és j a két oldal
// // i<400 és j<600
// // color boelean-el esetleg

let size: number = 15; 

function drawing2 (x: number, y: number) {      
    ctx.beginPath();
    ctx.fillRect(x * size, y * size, size, size);
    ctx.fill();
}
for (let i = 0; i < 40; i++) { 
    for (let j = 0; j < 60; j++) {      // %=valamivel való osztás maradéka
    if (i % 2 === j % 2) { // a léptetések: 0,0 osztást (2-vel osztás maradékot) hasonlít rajzol (egy kockákányit befeketít), aztán 0,1 nem rajzol (üresen hagy egy kockányit), aztán 0,2 rajzol, aztán 0,3 nem rajzol...
     drawing2(j, i);    
    }                  
    }
}
