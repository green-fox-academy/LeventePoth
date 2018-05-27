'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let x3: number[] = [60, 70, 80];
let y3: number[] = [30, 50, 60];

function drawing1 (x3: number [], y3: number []) {
    for (let i = 0; i < x3.length; i++) {  
        ctx.beginPath();
        ctx.moveTo(x3[i],y3[i]);
        ctx.lineTo(x3[i]+50,y3[i]);
        ctx.lineTo(x3[i]+50,y3[i]+50);
        ctx.lineTo(x3[i],y3[i]+50);
        ctx.lineTo(x3[i],y3[i]);
        ctx.stroke();
    }
}

drawing1(x3 ,y3);