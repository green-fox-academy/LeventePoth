// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFromFile(myfile: string) {
  try {
    return fs.readFileSync(myfile, charEncoding); // meg akarom nyitni a filepath-et
  } 
  catch (error)
  {
    console.log();
    return '0';
  }
}

function doSomething(file: string) {
    let result: string = readFromFile(file); // a readtofile functiont hívom be egy stringbe
    if (result !== '0') { // ha van valami a fájlban
      let content: string[] = result.split('\r\n');
      console.log(content.length)
      }
    }
    

  
doSomething('my-file.txt');