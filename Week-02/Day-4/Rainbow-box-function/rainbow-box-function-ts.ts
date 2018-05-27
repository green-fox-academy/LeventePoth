'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let x5: number[] = [90, 80, 70, 60];
let color1: string[] = ['red', 'green', 'blue', 'yellow']

function drawing1 (x5: number [], color1: string []) {
    for (let i = 0; i < x5.length; i++) {  
        ctx.beginPath();                        //ide belehetne szúrni egy változót amelyik mondjuk 1-től tízig számolja numbereket
        ctx.moveTo(300,200);
        ctx.moveTo(300+x5[i]/2,200+x5[i]/2);
        ctx.lineTo(300+x5[i]/2*-1,200+x5[i]/2);
        ctx.lineTo(300+x5[i]/2*-1,200+x5[i]/2-x5[i]);
        ctx.lineTo(300+x5[i]/2*-1+x5[i],200+x5[i]/2-x5[i]);
        ctx.lineTo(300+x5[i]/2*-1+x5[i],200+x5[i]/2-x5[i]+x5[i]);
        ctx.fillStyle = color1[i]
        ctx.fill();
    }
}

drawing1(x5, color1);