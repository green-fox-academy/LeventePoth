// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';

export {};

'use strict';

export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function writeToFile(root: string, content: string) {
  try {
    fs.readFileSync(root, charEncoding);
    fs.writeFileSync(root, content);
  } 
 catch(error) {
    console.log('Unable to write file: my-file.txt');
    return null;
  }
}
writeToFile('./my-file.txt', 'Levi')

