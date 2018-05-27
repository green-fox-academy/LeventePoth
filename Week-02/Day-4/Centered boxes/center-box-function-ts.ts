'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let x4: number[] = [60, 70, 80];

function drawing1 (x4: number []) {
    for (let i = 0; i < x4.length; i++) {  
        ctx.beginPath();
        ctx.moveTo(300,200);
        ctx.moveTo(300+x4[i]/2,200+x4[i]/2);
        ctx.lineTo(300+x4[i]/2*-1,200+x4[i]/2);
        ctx.lineTo(300+x4[i]/2*-1,200+x4[i]/2-x4[i]);
        ctx.lineTo(300+x4[i]/2*-1+x4[i],200+x4[i]/2-x4[i]);
        ctx.lineTo(300+x4[i]/2*-1+x4[i],200+x4[i]/2-x4[i]+x4[i]);
        ctx.stroke();
    }
}

drawing1(x4);