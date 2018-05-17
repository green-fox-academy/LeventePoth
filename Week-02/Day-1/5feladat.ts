'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

export {};

let number: number = 5

function factorio(number: number): number {
    let number1: number= 1;
{
        for (let i = 1; i <= number; i++) {
            number1 *= i;
        } 
    return number1;
    }
}
console.log(factorio(number));

/* {
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
} 

console.log(rFact(10))*/
