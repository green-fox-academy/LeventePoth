'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "It always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

quote = quote.replace('It', 'It always takes longer than');

console.log(quote);

