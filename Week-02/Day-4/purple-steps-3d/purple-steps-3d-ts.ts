'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

// let x4: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80];

// function drawing1 (x4: number []) {
//     for (let i = 1; i < x4.length; i++) { 
//         ctx.beginPath();
//         ctx.moveTo(x4[i],x4[i]);
//         ctx.lineTo(x4[i+1],x4[i]);
//         ctx.lineTo(x4[i+1],x4[i+1]);
//         ctx.lineTo(x4[i],x4[i+1]);
//         ctx.lineTo(x4[i],x4[i]);
//         ctx.fillStyle = 'purple'
//         ctx.fill();
//     }
// }
// drawing1(x4);

let size: number = 0;               
function drawing2 (i, size) {       //a drawing2 funkciója itt csak rajzolni
    ctx.fillRect(i, i, size, size);
}
for (let i = 0; i < 400; i+=size) {  // a for loop-val meghívjuk mindig a drawingot
    size+=20;                       
    drawing2(i, size);
}                                   // a for ciklus folyamatos, i=400-ig megy


