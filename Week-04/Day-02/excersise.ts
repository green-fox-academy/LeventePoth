class Person {
    name: string;
    age: number;
    gender: boolean;

introduce () {
   console.log ("Hi, I'm" + this.name + ", a " + this.age + "year old" + this.gender)
}

getGoal () {
    console.log("My goal is: Live for the moment!")
}

constructor Person(theName: string, theAge: number, theGender: boolean) {
this.name = theName, this.age = theAge, this.gender = theGender
}

constructor Person(theName: string, theAge: number, theGender: boolean) {
    "John Doe" = theName, 30 = theAge, female = theGender
    }

    class Student {
        name: string;
        age: number;
        gender: boolean;
        previousOrganization: string;
        skippedDays: number;
    
    getGoal () {
       console.log ("Be a junior software developer.")
    }
    
    introduce () {
        console.log("Hi, I'm" + this.name +", a" + this.age + "year old" +this.gender+" from "+ this.previousOrganization
         +" who skipped" + this.skippedDays + "days from the course already.")
    }

    skipDays(numberOfDays) {numberOfDays = numberOfDays+this.skippedDays}
    
    constructor Student(theName: string, theAge: number, theGender: boolean, thePreviousOrganization: string) {
    this.name = theName, this.age = theAge, this.gender = theGender, this.previousOrganization = thePreviousOrganization
    }
}

