'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

export { };

let untilValue: number = 5;
let number1: number = 0

function sum(number1: number): number {
    for (let i = 0; i < untilValue; i++) {
        number1 += i
    } return number1
}
console.log(sum(number1))
