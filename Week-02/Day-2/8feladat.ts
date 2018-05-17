'use strict';

export {};

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]): string[] {
let temp: string[] = [];
for(let i = 0; girls.length > i; i++) {
    temp.push(girls[i]);
    temp.push(boys[i]);
}
return temp;
};

console.log(makingMatches(girls, boys));

//export = makingMatches;