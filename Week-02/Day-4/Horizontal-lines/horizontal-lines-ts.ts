'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

let x1: number[] = [20, 20, 30];
let y1: number[] = [30, 50, 60];

function drawing1 (x1: number [], y1: number []) {
    for (let i = 0; i < x1.length; i++) {  
        ctx.beginPath();
        ctx.moveTo(x1[i],y1[i]);
        ctx.lineTo(x1[i]+50,y1[i]);
        ctx.stroke();
    }
}

drawing1(x1 ,y1);