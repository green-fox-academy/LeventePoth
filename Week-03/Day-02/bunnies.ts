// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies(bunny: number): number {  // 1 bunny = 2 ear
    if (bunny > 1) {
        return  (bunnies (bunny-1) +2)
    }
    else (bunny === 1) 
    { 
        return 2
    }
}
console.log(bunnies(10)); 
