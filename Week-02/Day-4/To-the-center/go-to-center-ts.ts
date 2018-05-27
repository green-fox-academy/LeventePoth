'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let x: number[] = [20, 20, 30];
let y: number[] = [30, 40, 40];

function drawing(x: number [], y: number []) {
    for (let i = 0; i < x.length; i++) {  
        ctx.beginPath();
        ctx.moveTo(x[i],y[i]);
        ctx.lineTo(300,200);
        ctx.stroke();
    }
}

drawing(x, y);
