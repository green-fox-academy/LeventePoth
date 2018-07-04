'use strict';

// Create a function named `isSymmetric` that takes an n×n integer matrix (two dimensional array) as parameter
// and returns true, if is that matrix is symmetric (diagonally from top-left to bottom-right)
// or false if it is not
//
// example for symmetric matrix:
// 1 0 1
// 0 2 2
// 1 2 5
//
// example for not symmetric matrix
// 7 7 7
// 6 5 7
// 1 2 1
let symmetricMatrix: number[][] = [
    [6, 1, 2],
    [1, 8, 3],
    [2, 4, 9]
]


function isSymmetric(symmetricMatrix) {
    for (let i: number = 0; i < symmetricMatrix.length; i++) {
        for (let j: number = 0; j < symmetricMatrix.length; j++) {
            if (symmetricMatrix[i][j] !== symmetricMatrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}


console.log(isSymmetric(symmetricMatrix));// should print out true