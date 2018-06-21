'use strict'

// export class Levi {
//     sum(something: any[]): number {
//         let count: number = 0;
//         for (let i: number = 0; i <= something.length; i++) {
//             count += i;
//         }
//         return count;
//     }
// }

export class Levi {
    sum(something: any[]): any {  
        for...                  // forral kellene végigpörgetni az array elemeit a string esetében is
        if (typeof (something) === "string") {
            return ('string')}
        else {
            let count: number = 0;
            for (let i: number = 0; i <= something.length; i++) {
                count += i;
            }
            return count;
        }
    }
}
