'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// function triangle (x: number, y: number) {
//     let a: number = 20
//     ctx.beginPath();
//     ctx.moveTo(x,y);                                     //50,50
//     ctx.lineTo(x+(i),y+(j*Math.sqrt(500));             // 40,50+√500  / 60,50+√500
//     ctx.lineTo(x-(i),y+(j*Math.sqrt(500));    // 30,50+50+√500 /  50,50+50+√500 / 70,50+50+√500
//     ctx.lineTo(x,y);
//     ctx.stroke();
// }
//     for (let i = 10; i < 30; i+=10) {
//         for(let j=1 ;j <= 3; j++){
// triangle(50,50);
//             }}

// function triangle (x: number, y: number) {
//         let a: number = 20
//         ctx.beginPath();
//         ctx.moveTo(x,y);                                    
//         ctx.lineTo(x+(10),y+(Math.sqrt(500));  
//                 x+20,y+2*(Math.sqrt(500))
//                 x,y+2*(Math.sqrt(500))
//                     x+30,y+3(Math.sqrt(500));
//                     x-10,y+3(Math.sqrt(500));
//         ctx.lineTo(x-(10),y+(Math.sqrt(500));
//                 x-20,y+2*(Math.sqrt(500))

//                     x-30,y+3(Math.sqrt(500))
//         ctx.lineTo(x,y);
//         ctx.stroke();
//     }
//         for (let i = 10; i < 400; i+=20) {
//             for(let j=1 ;j <= 100; j+=Math.sqrt(500)){
//     triangle(50,50);
//                 }}

// function triangle (x: number, y: number) {
//         let a: number = 20
//         ctx.beginPath();
//         ctx.moveTo(x,y);                                    
//         ctx.lineTo(x+(10),y+(Math.sqrt(500))
//             for (let i=0; i <= 40; i+=10){
//                 for (let j=0; j <= 4; i++){                
//                     ctx.lineTo(x+10+i),y+j*(Math.sqrt(500)
//                     ctx.lineTo(x+10-i),y+j*(Math.sqrt(500))}}
//                     // x+30,y+3(Math.sqrt(500));
//                     // x-10,y+3(Math.sqrt(500));
//         ctx.lineTo(x-(10),y+(Math.sqrt(500));
//                 // x-20,y+2*(Math.sqrt(500))

//                 //     x-30,y+3(Math.sqrt(500))
//         ctx.lineTo(x,y);
//         ctx.stroke();
//     }
//         // for (let i = 10; i < 400; i+=20) {
//         //     for(let j=1 ;j <= 100; j+=Math.sqrt(500)){
//     triangle(50,50);
//                 // }}

// function triangle (x: number, y: number) {
//         let a: number = 20
//         ctx.beginPath();
//         ctx.moveTo(x,y);                                    
//         ctx.lineTo(x+(10),y+(Math.sqrt(500)));
//         ctx.lineTo(x-(10),y+(Math.sqrt(500)));
//         ctx.lineTo(x,y);
//         ctx.moveTo(x+(10),y+(Math.sqrt(500)));
//         ctx.lineTo((x+10+i),y+j*(Math.sqrt(500)));
//         ctx.moveTo(x+(10),y+(Math.sqrt(500)));
//         ctx.lineTo((x+10-i),y+j*(Math.sqrt(500)));
//         ctx.moveTo(x-(10),y+(Math.sqrt(500)));
//         ctx.lineTo((x-10+i),y+j*(Math.sqrt(500)));
//         ctx.moveTo(x-(10),y+(Math.sqrt(500)));
//         ctx.lineTo((x-10-i),y+j*(Math.sqrt(500)));
//         ctx.stroke();
//     }
//     for (let k=0; k <= 4; k++){
//     for (let i=0; i <= 40; i+=10){
//         for (let j=0; j <= 4; j++){  
//         } 
//         triangle (100,100)   
//     } 
// }
// function triangle(x: number, y: number) {
    // let a: number = 20
    // for (let i = 1; i <= 4; i++) {
    //     for (let k = 1; k <= 3; k++) {
    //         for (let j = 0; j <= 3; j++) {
    //             if ((k == 2 && j == 3) || (k == 3 && j == 3) || (k == 3 && j == 2)) {
    //                 break;
    //             }

    let i: number
    let k: number

    function triangle(x: number, y: number)   
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + i, y * (Math.sqrt(k)));
                    ctx.lineTo(x - i, y + (Math.sqrt(k)));
                    ctx.lineTo(x, y);
                    ctx.stroke();


triangle(100, 100)