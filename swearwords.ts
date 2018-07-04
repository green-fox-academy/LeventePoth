'use strict';

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.
let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];
// console.log(familyFriendlizer('content.txt', offensiveWords)); // should print out 

export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function familyFriendlizer(root: string, content: string[]) {
    try {
        let modifiable: string = fs.readFileSync(root, charEncoding);
        console.log(modifiable);
        let splitted: string[] = modifiable.split(' ');
        console.log(splitted);
        let count: number = 0;
        for (let i: number = 0; i < offensiveWords.length; i++) {
            for (let j: number = 0; j < splitted.length; j++) {
                if (
                    offensiveWords[i] === splitted[j] ||
                    offensiveWords[i] === `${splitted[j]},` ||
                    offensiveWords[i] === `${splitted[j]}.`
                ) {
                    // latest = modifiable.replace(modifiable[i], '')
                    splitted[j] = '';
                    count++;
                }
            }
        }
        console.log(count);
        console.log(splitted.join(' ').replace('  ', ' '));
        fs.writeFileSync(root, splitted.join(' ').replace('  ', ' '))
    }
    catch (error) {

        console.log('');
        return null;
    }
}
familyFriendlizer('context.txt', offensiveWords)


        // let replacedStuff = readFileSync.replace(offensiveWords[i, ''])
