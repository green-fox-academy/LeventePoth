'use strict'

abstract class Animal {
    name: string;
    age: number;
    breeds: string;


    getName(){}

    breed() {}
}

class Mammal extends Animal {

    constructor (name: string, breeds: string = 'Pushing Miniatures') {
        super()
        this.name = name
        this.breeds = breeds
    }

    getName () {
        return this.name
    }

    breed () {
        return this.breeds
    }
}

class Reptile extends Animal {

    constructor (name: string, breeds: string = 'laying Eggs') {
        super()
        this.name = name
        this.breeds = breeds
    }

    getName () {
        return this.name
    }

    breed () {
        return this.breeds
    }

}

class Bird extends Animal{

    constructor (name: string, breeds: string = 'laying Eggs') {
        super()
        this.name = name
        this.breeds = breeds
    }

    getName () {
        return this.name
    }

    breed () {
        return this.breeds
    }

}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());