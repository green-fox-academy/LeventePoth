'use strict';

const mapwith = (array, callback) => {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]))
    }
    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array. // az array minden elemére ráhvom a callbeket, 

    return output
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapwith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which remove every second letter from a string

const words = ['map', 'reduce', 'filter'];

const mapWith = (words, callback) => {
    let output = [];

    for (let i = 0; i < words.length; i++) {
        output.push(callback(words[i]))
    }
    return output
}

const removeSecondLetter = (str) => {
    let str1 = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
        str1 = str.slice(0, i - 1) + str.slice(i)
        }
    }
    // let str1 = str.slice(0, 1) + str.slice(2);
    return str1;
}


console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']