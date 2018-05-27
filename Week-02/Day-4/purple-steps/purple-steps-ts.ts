'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let x4: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80];

function drawing1 (x4: number []) {
    for (let i = 1; i < x4.length; i++) { 
        ctx.beginPath();
        ctx.moveTo(x4[i],x4[i]);
        ctx.lineTo(x4[i+1],x4[i]);
        ctx.lineTo(x4[i+1],x4[i+1]);
        ctx.lineTo(x4[i],x4[i+1]);
        ctx.lineTo(x4[i],x4[i]);
        ctx.fillStyle = 'purple'
        ctx.fill();
    }
}
drawing1(x4);