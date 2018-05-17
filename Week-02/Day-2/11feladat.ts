'use strict';

export {};

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
//export = containsSeven;

function containsSeven(numbers: number[]): string {
    let temp: string;
    for(let i = 0; numbers.length > i; i++) {
        if (numbers[i] === 7) {
            console.log("Noooooo")
        }
        else {
            console.log('Hoorray');
        }
    return temp; 
   }

    };
    console.log(containsSeven(numbers));
