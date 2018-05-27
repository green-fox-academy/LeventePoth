// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function factorial(n: number): number {
    if ((n/10 < 1)) {
        return n%10;
    }
    else {
        return n%10 + factorial(n/10);   // 126-nál = 1+2+6  aztán 2+6 aztán 6
    }
}

console.log(factorial(126));
