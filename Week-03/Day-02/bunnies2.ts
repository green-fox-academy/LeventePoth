// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnies(bunny: number): number {  // 1 bunny = 2 ear
    if (bunny<=1){
        return 2
    }
    if (bunny % 2 ===0) {
        return  (bunnies (bunny-1) +3)
    }
    else {
        return  (bunnies (bunny-1) +2)
    }

}
console.log(bunnies(4)); 