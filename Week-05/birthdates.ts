'use strict';

export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function birthdates(root: string) {
    let openedCsv: string = fs.readFileSync(root, charEncoding);
    let splitted: any[] = openedCsv.split(';');
    let newArray: string[] = [];
    for (let i: number = 0; i < splitted.length; i++) {
        let letter: string = splitted[i];
        if (letter.charAt(0) === '1' || letter.charAt(0) === '2') {
            let slicedStuff: string = letter.slice(0, 4);
            newArray.push(slicedStuff);
        }
    }
    let counter: Object = {};
    for (let j: number = 0; j < newArray.length; j++) {
        let letter = newArray[j];
        if (counter[letter]) {    // itt adja hozzá a i-edik karakter számát a Object {}-hez , [letter] 
            counter[letter]++;
        } else {
            counter[letter] = 1;
        }
    }
    let newNewArray: any[] = [];
    newNewArray = Object.getOwnPropertyNames(counter) //itt az üres array-be tesszük csak a key-ket a "counter" object
    let maxValue: number = 0;
    let maxKey: string;
    for (let k: number = 0; k < newNewArray.length; k++) {
        if (counter[newNewArray[k]] > counter[newNewArray[k - 1]]) {
            maxValue = counter[newNewArray[k]];
            maxKey = newNewArray[k];
        }
    }
    console.log(maxKey)
    //console.log(maxKey)

}

birthdates('birth.csv');


