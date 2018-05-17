'use strict';

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function writeToFile(root: string, content: string, numberLines: number) {
  try {
    fs.readFileSync(root, charEncoding);
    for (let i=0; i<numberLines; i++) {
        let number1: string = fs.readFileSync(root, charEncoding);
        fs.writeFileSync(root, content + '\r\n' + number1);
    }
  } 
 catch(error) {
    console.log('');
    return null;
  }
}
writeToFile('my-file.txt', 'Levi', 5);
