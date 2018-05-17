'use strict';

export {};

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc

let abc: string[] = ["Arthur", "Boe", "Chloe"];

let temp = abc[0];

abc[0] = abc[2]
abc[2] = temp

console.log (abc);

/*
let a: number = 123
let b: number = 526
let tmp = a 

a = b;
b = tmp; */

/* console.log ('a=', a, 'b=', b,);

const lastValue = abc.pop("Arthur");
console.log(abc);

const value = pets.shift();
console.log(pets);
console.log(value);

pop unshift shift push */