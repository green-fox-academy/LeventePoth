'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(reversed: string): string {
let temp: string = '';
for(let i = reversed.length; i >= 0; i--) {
    temp += reversed[i];
}
return temp;
};

console.log(reverse(reversed));

/*
example.replace('dishwasher', 'galaxy')

console.log(reverse(reversed));

export = reverse; */