function sayHello () {
    console.log ('Hello World')
}

function greet(greetStr: string, nameStr: string): void {
    console.log(`${greetStr} ${nameStr}!`);
}

const sum = function (a: number, b: number): number {
    return a + b
}

console.log(multiply(2, 5));

let pets: string[] = ['Morzsi', 'Pöty', 'Csibész'];
console.log(pets[0]);

pets.push('Mancs');
console.log(pets);
console.log(pets.length);
console.log(pets[pets.length -1]);
pets[pets.length] = 'vau';


