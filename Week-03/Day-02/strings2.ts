// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function str(string1: string): string {
    if (string1.indexOf('x') < 0) { 
        return string1;
    } 
    let xPosition: number = string1.indexOf('x');
    return `${string1.slice(0, xPosition)}${str(string1.slice(xPosition + 1))}`
 }

 console.log(str('xanax'));