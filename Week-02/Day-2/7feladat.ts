'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"
// console.log(putSaturn(planetList));

function putSaturn(planetList: string[]): string[] {
    planetList.push('Saturn');
    return planetList;
    };
    
    console.log(putSaturn(planetList));

// export = putSaturn;