/*
//Anterior a ES6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'VE';
    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'Oscar', age = 32, country = 'VE') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Kevin', 27, 'VE');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Proin sapien tortor, posuere ac dolor ut \n"
    + ", semper sollicitudin orci.";
//ES6
let lorem2 = `Suspendisse consequat justo enim, 
ut sollicitudin diam posuere eget`;
console.log(lorem);
console.log(lorem2);

//Desestructuración de Elementos
let person = {
    'name': 'Kevin',
    'age': 27,
    'country': 'VE'
}
console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name,age,country);

//Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David',...team1,...team2];

console.log(education);
*/
/*
let name = 'oscar';
let age = 32;
//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};

console.log(obj, obj2)

//Arrow Function
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Kevin', age: 27}
];
let listOfNames = names.map(function (item) {
        console.log(item.name);
    }
);

let listOfNames2 = names.map((item) => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    console.log(name);
}

const listOfNames4 = name => {
    console.log(name);
}

const square = num => num * num;

//Promise
const helloPromise = () => {
    return new Promise((resolve, reject) => {
       if(false){
           resolve('Todo Ok');
       } else{
           reject('Algo salio mal');
       }
    });
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
*/
//Clases
class  calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));
//import hello from './module';

function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);