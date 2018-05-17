let pets1: string[] = ['Morzsi', 'Pöty', 'Csibész'];
console.log(pets1[0]);

pets.push('Mancs');
console.log(pets1);
console.log(pets1.length);
console.log(pets1[pets1.length -1]);
pets1[pets1.length] = 'vau';
console.log(pets1);


pets1.unshift('Vau'); //új elem az elejére
console.log(pets1);

pets1.shift(); //új elem elvétele
console.log(pets1);
console.log(value);

const lastValue = pets1.pop();
console.log(pets1);
console.log(lastValue);

console.log(pets1.indexOf('Pötyi')); //1. elem száma a sorban
const newPets = pets.slice(1, 3);
console.log(newPets); //1 és 3 elem 

pets1.splice(1, 2, 'Cézár'); //2 és 3 elem törlése 
console.log(pets1);

console.log(pets1.concat(['Dog1', 'Dog2']));
const array2 = pets1.concat([]); //copy an element into an element

console.log(pets1);
for (let i: number= 0; i < pets1.length; i++) {
    console.log(pets1[i]);
}

pets1.forEach(function(dog, index) => {
    console.log(`#${index+  1}: ${dog}`);
})

let helloDogs = pets1.map(dog => (`Hello, ${dog}`));

const longNames = pets1.filter(function(dog) {
return dog.length > 5;
});

const longNames = pets1.filter(dog => (dog.length))