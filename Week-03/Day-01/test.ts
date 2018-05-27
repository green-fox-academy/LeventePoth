'use strict';

export class Student {
  name: string;
  grades: number[];

  constructor(name: string) {
    this.name = name;
    if (name === 'God') {
      this.grades = [5, 5, 5];
    } else {
      this.grades = [];
    }
  }
}

let jozsi = new Student('Jozsi');
console.log(jozsi.name);
console.log(jozsi.grades);
jozsi.grades.push(5);
console.log(jozsi);
let god = new Student('God');
console.log(god.grades);