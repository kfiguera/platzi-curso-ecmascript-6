//flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));
//flatMap
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value,value*2]));

//Trim
let text = '         Hello World         ';
console.log(text);
console.log(text.trimStart());
console.log(text.trimEnd());

//optional Catch Error

try {

} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//fromEntries
// array to object
let entries = [["name", "Kevin"], ["age", 27]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
console.log(symbol);