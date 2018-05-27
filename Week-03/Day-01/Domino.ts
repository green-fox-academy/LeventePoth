class Domino {              // itt tömbként kezeli a dominoes-t, amibe korábban belepussoltunk mindent
    values: number[];       
    constructor(valueA: number, valueB: number) {           // a valueA-ban hivatkozunk a tömb soraira
        this.values = [valueA, valueB];                     // a valueB-ben hivatkozunk az első vagy második számra
    }
}


function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {            // itt már a Domino class-ból hívjuk meg a dominoes-t
    dominoes.forEach(function (value) {     // itt forEach-nélszedjük szét a Dominoes Array-t
        console.log(value);
    });
for ( let i =0; i <=4; i++) {
    for (let j =1; j <= 5; j++) {   
     if (dominoes[i].values[1] === dominoes[j].values[0]) {
        let temp = dominoes[j]
            dominoes[j] = dominoes[i+1]
           dominoes [i+1] = temp
        }     
    }
;
}}

let dominoes = initializeDominoes();

print(dominoes);