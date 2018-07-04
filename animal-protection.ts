'use strict';

class Animal {
    name: string;
    isHealthy: boolean
    healCost: number

    heal() {
        this.isHealthy = true
    }

    isAdoptable() {
        let itIsAdoptable: boolean
        if (this.isHealthy = true) {
            itIsAdoptable = true
            return itIsAdoptable
        }
        else { !itIsAdoptable }
    }

    toString() {
        if (this.isHealthy = false) {
            console.log(`${this.name} is not healthy (${this.healCost}>€), and not adoptable`)
        }
        else {
            console.log(`${this.name} is healthy, and adoptable`)
        }
    }
}
class Cat extends Animal {
    constructor() {
        super()
        this.name = name
        this.isHealthy = true
        this.healCost = Math.floor(Math.random() * 6)
    }
}

class Dog extends Animal {
    constructor() {
        super()
        this.name = name
        this.isHealthy = true
        this.healCost = Math.floor(Math.random() * 8) + 1
    }
}
class Parrot extends Animal {
    constructor() {
        super()
        this.name = name
        this.isHealthy = true
        this.healCost = Math.floor(Math.random() * 10) + 4
    }
}

class AnimalShelter {
    budget: number;
    animals: Animal[];
    adopters: string[];

    constructor(budget: number) {
        this.budget = budget
        this.animals = []
        this.adopters = []
    }

    rescue(animals: Animal[]) {
        this.animals.push(newanimal)
        return (this.animals.length)
    }

    heal() {
        let count: number = 0
        if (this.animals[i].isHealthy && this.budget >= this.animals[i].healCost) {
            this.budget -= this.animals[i].healCost
            count++;
            break;
        }
        return count;
    }

    addAdopter(adopterName: string) {
        return this.adopters.push(adopterName)
    }

    findNewOwnerFilterByByBalázs() {
        if (this.animals.length !== 0 && this.adopters.length !== 0) {
            let healthyAnimals: Animal[] = [];

            this.animals.forEach((animal) => {
                if (animal.isAdoptable()) {
                    healthyAnimals.push(animal);
                }
            });

            if (healthyAnimals.length > 0) {
                let k = Math.floor(Math.random() * healthyAnimals.length);
                let j = Math.floor(Math.random() * this.adopters.length);
                healthyAnimals.splice(k, 1);
                this.adopters.splice(j, 1);
            }
        }
    }

    findNewOwner() {
        if (this.animals.length !== 0 && this.adopters.length !== 0) {
            for (let i: number = 0; i < this.animals.length; i++) {
                if (this.animals[i].isHealthy) {
                    let k: number;
                    do {
                        k = Math.floor(Math.random() * this.animals.length) // amíg a k nem ad healthy-t
                    } while (!this.animals[k].isHealthy)

                    let j = Math.floor(Math.random() * this.adopters.length)
                    this.animals.splice(k, 1)
                    this.adopters.splice(j, 1)
                }
                else (console.log('there are no healthy animals'))
            }
        }
        else (console.log('there are no lists'))
    }

    earnDonation(amount: number): number {
            this.budget += amount        
            return this.budget
    }

    toString () {
        console.log(`Budget: ${this.budget}, There are ${this.animals.length} animal(s) and ${this.adopters.length} potential adopter(s)`)
// <name> is not healthy (<heal cost>€), and not adoptable
// <name> is healthy, and adoptable
    }


let newanimal = new Animal

let newowner = new

    // Create an animal shelter where we can save and take care of Animals
    //
    // An Animal
    // -  has a `name` and stores it's health state in a boolean
    // -  has a `healCost` field
    // -  has a method named `heal()`, that sets the `isHealthy` field's status to true
    // -  has a method named `isAdoptable` that returns a boolean value whether it can be adopted or not (an animal
    //    can be adopted if it is healthy)
    // -  has a method named `toString()` that represents the Animal in the following format:
    // <name> is not healthy (<heal cost>€), and not adoptable
    // <name> is healthy, and adoptable
    // The animal's name is the same as the class name by default, but it can be set trough constructor as well
    // 
    // We are working with 3 types of Animals
    // -  Cat's healing cost should be a random number between 0 and 6
    // -  Dog's healing cost should be a random number between 1 and 8
    // -  Parrot's healing cost should be a random number between 4 and 10
    //
    // An AnimalShelter 
    // -  has a `budget`
    // -  has an `animals` list
    // -  has an `adopters` name list
    // -  has a method named `rescue(animal)` this method takes an Animal object as parameter and add the animal 
    //    to the shelter's list and return the size of the list
    // -  has a method named `heal()` this method heals the first not healthy Animal, if it is possible by budget,
    //    returns the amount of healed animals(0 or 1)
    // -  has a method named `addAdopter(name)` this method takes a string as parameter and save it as a potential new owner
    // -  has a method named `findNewOwner()` this method pairs a random name with a random adoptable Animal if it is possible
    //    and remove both of them from the lists
    // -  has a method named `earnDonation(amount)` this method takes a whole number as parameter and increase the shelter's
    //    budget by the parameter's value and returns the current budget
    // -  has a method named `toString()` that represents the shelter in the following format:
    // Budget: <budget>€, There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
    // <name> is not healthy (<heal cost>€), and not adoptable
    // <name> is healthy, and adoptable
    //
    // The shelter starts with 50€ without any Animal and adopter
    // 
    let animalShelter = new AnimalShelter();

animalShelter.rescue(new Cat());
animalShelter.rescue(new Dog("Furkesz"));
animalShelter.rescue(new Parrot());
console.log(animalShelter.toString());
// Budget: 50€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is not healthy (3€) and not adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable
animalShelter.heal();
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable     
animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 1 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable
animalShelter.findNewOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());
// Budget: 77€, There are 2 animal(s) and 0 potential adopter(s)
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable