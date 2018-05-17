'use strict';

export {};

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(far: string[]): string [] {
    let temp: string[] =[];
    for(let i = 0; far.length > i; i++) {
        far[i] = far[i].concat('a');
    }
    return temp;
    };

console.log(appendA(far));
console.log(far)

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
//export = appendA;