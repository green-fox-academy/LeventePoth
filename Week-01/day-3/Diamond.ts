'use strict';

export { };

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 4;
let linecount1: number = 2;
let linecount3: number = 1;
let star: string = '*'
let star1: string = '*****'
let star3: string = '**'
let star2: string = '*'
let space: string = ''
let spaceCount: number = 3
let spaceCount1: number = 1
for (let i = 0; i < lineCount; i++) {
    space = ''             
    for (let j = 0; j < spaceCount; j++){
        space += ' '; 
    }
    console.log(space + star); 
    star += '**'; 
    spaceCount -= 1 
}
for (let i = 0; i < linecount1; i++) {
    space = ''             
    for (let j = 0; j < spaceCount1; j++){
        space += ' '; 
    }
    console.log(space + star1); 
    star1 = '***'; 
    spaceCount1 += 1 
}
for (let i = 0; i < linecount3; i++) {
    space = ''              
    for (let j = 0; j < spaceCount1; j++){
        space += ' '; 
    }
    console.log(space + star2); 
    star2 = '*'; 
    spaceCount1 += 1 
}