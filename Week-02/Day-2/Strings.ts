export {};

let str: string = 'This is my original String';

console.log(str.indexOf('original'));
console.log(str.indexOf('!'));
console.log(str.indexOf('is', 4));

console.log(str.replace('original', 'new'));
console.log(str);

str = str.replace('original', 'new');
console.log(str);


let AppleStr: string = 'apple';
console.log(AppleStr.split(''));
console.log(str.split(' '));
console.log(str.split(' ' ,3));

console.log(str.slice(8, 19));
console.log(str.slice(8, -3));
console.log(str.slice(-1, 10));

console.log(str.substring(2, 3)); // like slice, we can swap also

console.log(str.charCodeAt(11));
console.log(str[11]);

console.log(str.concat('I like it'));
console.log(str + 'I like it'); //wrong
console.log(`${str} I like it.`); //?????

let car = {
    brand: 'Audi',
    type: 'A6',
    color: 'blue',
    start: () => {
        console.log('Wrom-wrom');
    }
};
console.log(typeof car);
console.log(car);

console.log(car.type);

car.type = 'A1'
car['type'] = 'A2' // wrong
console.log(car.type);

// console.log(car[keyStr]); nem működik

console.log(Object.keys(car));

Object.keys(car).forEach(key => {
    console.log(car[key])
});

Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`)
});

console.log(car.start());

let objArray: any [] = []
objArray.push(car);
objArray.push({
brand: 'Audi',
type: 'A6',
color: 'blue',
start: () => {
    console.log('Wrom-wrom');
}
});

console.log(objArray);
objArray.forEach( car => {
    console.log(`I have an ${car.color}`);
})
