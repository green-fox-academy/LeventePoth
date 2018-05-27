'use strict';

export {};

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function writeToFile(root: string, content: string, numberLines: number) {
  try {
    fs.readFileSync(root, charEncoding);
    for (let i=0; i<numberLines; i++) {
        let number1: string = fs.readFileSync(root, charEncoding); // az első i sorban megnyit egy üres sort(olvas)
        fs.writeFileSync(root, content + '\r\n' + number1); // ésbeleír egy sornyi contentet
    }
  } 
  catch(error) {
    console.log('Unable to write file: my-file.txt');
    return null;
  }
}
writeToFile('my-file.txt', 'Levi', 5);