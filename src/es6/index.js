//Anterior a ES6
function  newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'VE';
    console.log(name,age,country);
}
//ES6
function  newFunction2(name = 'Oscar', age = 32, country = 'VE') {
    console.log(name,age,country);
}
newFunction2();
newFunction2('Kevin', 27,'VE');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);