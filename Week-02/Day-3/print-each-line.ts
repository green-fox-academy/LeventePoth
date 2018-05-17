// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

'use strict';

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFromFile(myfile: string) {
  try {
    return fs.readFileSync(myfile, charEncoding); // meg akarom nyitni a filepath-et
  } catch(error) { // ha nem tudom akkor error
    console.log('Unable to read file: my-file.txt');
    return null;
  }
}

function doSomething(file: string) {
    let result = readFromFile(file); // a readtofile functiont hívom be
    if (result !== null) { // ha van valami a fájlban
      let content = result.split('\n').forEach(function (element){
console.log(element);
      }) 
    }
}
  
doSomething('my-file.txt');

/*

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFromFile(myfile: string, charEncoding: string) {
    try {
        return fs.readFileSync(myfile, charEncoding); 
    } 
    catch (error) {
      console.log('Unable to read file: myfile.txt');
      return null;
    }
  }

function doSomething() {
    let result: string = readFromFile('mytext.txt', 'utf-8');
    if (result !== null) {
        let content = result.split('\r\n').forEach(element => {
        if (element === 'i love cats') {
        console.log('i searched from the file');
        }
        });
        writeToFile('mfile.txt', result);
    } 
}

*/