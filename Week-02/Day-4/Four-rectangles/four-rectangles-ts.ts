'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let x2: number[] = [20, 20, 30, 50];
let y2: number[] = [30, 50, 60, 60];

let color: string[] = ['red', 'green', 'blue', 'yellow']

function drawing1 (x2: number [], y2: number [], color: string []) {
    for (let i = 0; i < x2.length; i++) {  
        ctx.beginPath();
        ctx.moveTo(x2[i],y2[i]);
        ctx.lineTo(x2[i]+50,y2[i]);
        ctx.lineTo(x2[i],y2[i]+50);
        ctx.lineTo(x2[i],y2[i]);
        ctx.strokeStyle = color[i];
        ctx.stroke();
    }
}

drawing1(x2 ,y2, color);