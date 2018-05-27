'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function toCenter (x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x*20,y*20);
    ctx.lineTo(300,200);
    ctx.stroke();
}
for (let i = 0; i <= 20; i++) { 
    if (i<1)
    for (let j = 0; j < 30; j++) {    
    toCenter(j, i);   
    } 
}  
for (let i = 0; i <= 20; i++) { 
    if (i>19)
    for (let j = 0; j < 30; j++) {    
    toCenter(j, i);   
    } 
}
for (let j = 0; j <= 30; j++) { 
    if (j<1)
    for (let i = 0; i <= 20; i++) {    
    toCenter(j, i);   
    } 
}
for (let j = 0; j <= 30; j++) { 
    if (j>29)
    for (let i = 0; i <= 20; i++) {    
    toCenter(j, i);   
    } 
}                     