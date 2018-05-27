'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
}
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

let Idea = new PostIt ();
Idea.backgroundColor = 'orange'
Idea.text = 'Idea 1'
Idea.textColor = 'blue'
console.log(Idea);
let Awsome = new PostIt ();
Awsome.backgroundColor = 'pink'
Awsome.text = 'Superb!'
Awsome.textColor = 'black'
console.log(Awsome);
let Superb = new PostIt ();
Superb.backgroundColor = 'yellow'
Superb.text = 'Superb!'
Superb.textColor = 'green'
console.log(Superb);
// console.log(jozsi.name);
// console.log(jozsi.grades);
// jozsi.grades.push(5);
// console.log(jozsi);
// let god = new Student('God');
// console.log(god.grades);