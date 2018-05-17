'use strict';

export {};

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let listOfNumbers2: number[] = [4, 8, 12, 1];
console.log(checkNums(listOfNumbers));

export = checkNums;

function listOfNumbers(numbers: number[]): boolean[] {
    let temp: string[] = [];
    for(let i = 0; listOfNumbers.length > i; i++) {
        if (numbers[i] === 7) {
            console.log("Noooooo")
            else console.log('Hoorray');
        }
    }
    return temp;
    };
    console.log(containsSeven(numbers));