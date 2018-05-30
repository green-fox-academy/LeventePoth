'use strict'

abstract class Instrument {
    name: string;

    play(){}
}

abstract class StringedInstrument extends Instrument {
    numberOfString: number;

    sound() {}
}

class ElectricGuitar extends StringedInstrument {
    
    constructor (numbberOfString: number = 6) {
        super()
        this.numberOfString = numbberOfString
    }

    play() {
        console.log(`electric guitar with ${this.sound()} number of strings ${this.numberOfString}`);
    }
    sound() {
        return 'Twang'
    }
}

class BassGuitar extends StringedInstrument {

    constructor (numbberOfString: number = 4) {
        super()
        this.numberOfString = numbberOfString
    }

    play() {
            console.log(`Bass guitar with ${this.sound()} number of strings ${this.numberOfString}`)
    }

    sound() {
        return 'Duum-duum-duum'
    }
}

class Violin extends StringedInstrument {
    numberOfString = 4;
    play() {
        console.log(`Violin with ${this.sound()} number of strings ${this.numberOfString}`)
}

    sound() {
        return 'Screech'
    }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();