'use strict';

export { };

let a: string= "I won't cheat on the exam!";

for (let i = 1; i <= 100; i++) 
{
    console.log(a); // Prints the numbers from 0 to 99
  }

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

'use strict';

for (let j: number = 0; j < 500; j++) {
    if ( j % 2 === 0) {
        console.log(j); // Prints the numbers from 0 to 99
    }
}

// Create a program that prints all the even numbers between 0 and 500

'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

for (let j: number = 1; j < 10; j++) {
    console.log(`${j} * 15 = ${j*15}`);
  }

  'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let j: number = 1; j < 101; j++) {
    if (j % 3 == 0) {
    console.log('Fizz');
    } else if ( j % 5 == 0) {
    console.log('Buzz');
    } else if (j % 3 == 0 && j % 5 == 0) {
    console.log('FizzBuzz');
  } else {
      console.log(j)
  }
}
  'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let star: string = '*'
for (let i = 0; i < lineCount; i++) {
    console.log(star)
    star += '*'
}

'use strict';

export { };

let lineCount1: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let star1: string = '*'
let space: string = ''
let spaceCount: number = 3
for (let i = 0; i < lineCount1; i++) {
    space = ''              // elindítunk egy countert egy valamilyen értékkel
    for (let j = 0; j < spaceCount; j++){
        space += ' '; // hozzáadunk egy folymatosan növekvő space-t majd a sorokhoz
    }
    console.log(space + star1); // egy folyamatosan növekvő space-t starhoz adunk hozzá majd
    star1 += '**'; // star mindig két csillaggal növeli önmagát soronként
    spaceCount -= 1 // a 3 space mindig (soronként) 1-el csökken
}


