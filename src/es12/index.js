const string = "JavaScript es Maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace('JavaScript', 'Python')
console.log(replacedString);
const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2);

class Message {
    #show(val) {
        console.log(val);
    }

    getShow(val) {
        this.#show(val);
    }
}

const message = new Message();
message.getShow('hola');

//Promise Any
const promise1 = new Promise(((resolve, reject) => reject('reject')));
const promise2 = new Promise(((resolve, reject) => resolve('resolve')));
const promise3 = new Promise(((resolve, reject) => resolve('resolve')));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

class anyClass {
    constructor(element) {
        this.ref = WeakRef(element);
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);