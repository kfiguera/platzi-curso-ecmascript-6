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
