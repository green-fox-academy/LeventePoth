'use strict';

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding); // meg akarom nyitni a filepath-et
  } catch(error) { // ha nem tudom akkor error
    console.log(error.message);
    return null;
  }
}

 /* function writeToFile(filePath: string, content: string) {
  try {
    fs.writeFileSync(filePath, content);
    console.log('file writing succesful');
  } catch(error) {
    console.log(error.message);
  }
} */

function doSomething() {
  let result: string = readFromFile('my-text.txt'); // a readtofill functiont hívom be
  if (result !== null) { // ha van valami a fájlban
    let content = result.split('\r\n').forEach(element => {
    if (element === 'i love cats') {
      console.log('i searched from the file');
    }
    });
    writeToFile('mfile.txt', result); // behívom a writeto File functiont
  } 
}

doSomething();