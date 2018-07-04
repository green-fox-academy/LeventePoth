'use strict'

class Person {
    name: string;
    age: number;
    gender: string

    introduce() {
        console.log("Hi, I'm" + this.name + ", a " + this.age + "year old" + this.gender)
    }

    getGoal() {
        console.log("My goal is: Live for the moment!")
    }

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

export class Student extends Person {
    previousOrganization: string;
    skippedDays: number;
    constructor(name?: string, age?: number, gender?: string,
        previousOrganization: string = "The School of Life") {
        super(name,age,gender)
        this.name = name
        this.age = age
        this.gender = gender
        this.previousOrganization = previousOrganization
    }
    getGoal() {
        console.log("Be a junior software developer.")
    }

    introduce() {
        console.log("Hi, I'm" + this.name + ", a" + this.age + "year old" + this.gender + " from " +
            this.previousOrganization
            + " who skipped" + this.skippedDays + "days from the course already.")
    }

    skipDays(numberOfDays) { numberOfDays = numberOfDays + this.skippedDays }


}

export class Mentor extends Person {

    level: string;

    constructor (name?: string, age?: number, gender?: string, level: string = "intermediate") {
    super(name,age,gender)   
    name = this.name
    age = this.age 
    gender = this.gender 
    level = this.level
    }

    getGoal() {
        console.log("Educate brilliant junior software developers.")
    }
    introduce() {
        console.log("Hi, I'm" + this.name + ", a "
            + this.age + "year old" + this.gender + this.level + "mentor.")
    }
}

export class Sponsor extends Person {

    company: string;
    hiredStudents: number;

    constructor (name?: string, age?: number, gender?: string, 
    company: string = "Google", hiredStudents: number = 0) {
    super(name,age,gender)   
    name = this.name
    age = this.age 
    gender = this.gender
    company= this.company
    hiredStudents = this.hiredStudents
    }

    introduce() {
        "Hi, I'm" + this.name + ", a " + this.age + " year old" + this.gender + "who represents"
            + this.company + "and hired" + this.hiredStudents + "students so far."
    }

    hire() {
        this.hiredStudents++
    }

    getGoal() {
        console.log("Hire brilliant junior software developers.")
    }
}

class Cohort {
    name: string;
    students : Student[]; // itt hivatkozom meg a lent meghívott új Student elemet
    mentors : Mentor[];

    constructor (name: string, students: Student[], mentors: Mentor[]) {
    this.name = name
    this.students = [];
    this.mentors = [];
    }

    addStudent(stupydent: Student) {
            this.students.push(stupydent);
        }
    addMentor(mentorok: Mentor) {
            this.mentors.push(mentorok);
    }
    info() {
        "The" +this.name+ "cohort has " + this.students.length + " students and " + this.mentors.length + " mentors." 
    }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME', Student[2], Mentor[2]); // ??????
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();

