// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

// function str(string1: string): string {
//     if ( string1.indexOf(string1.length-1)){
//         string1.splice(str(string1.length-1,) 
//     }
//     if (str (string1.length-1) = 'x') {
//         return 'y'
//     }
//     // else {
    //     return  (bunnies (bunny-1) +2)
//     // }
// }
// console.log(str(....)); 

// a visszatérés minig a string1-be lesz
// base a indexof()===-1, ekkor kilép a program

function str(string1: string): string {
       if (string1.indexOf('x') < 0) { 
           return string1;
       } 
       let xPosition: number = string1.indexOf('x');
       return `${string1.slice(0, xPosition)}y${str(string1.slice(xPosition + 1))}`
    }

    console.log(str('XXX'));