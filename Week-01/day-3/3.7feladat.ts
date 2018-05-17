'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingHours: number = 24 - currentHours
let remianingMinutes: number = 60 - currentMinutes
let remainingSeconds: number = 60 - currentSeconds

console.log(remainingHours * remianingMinutes * remainingSeconds);