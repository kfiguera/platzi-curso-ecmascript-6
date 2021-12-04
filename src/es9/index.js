//Object Rest/Spread Properties
const obj = {
    name: 'Kevin',
    age: 27,
    country: 'VE'
}
let {country, ...all} = obj;
console.log(country,all);


const obj2 = {
    name: 'Kevin',
    age: 27,
}

const obj3 = {
    ...obj2,
    country: 'VE'
}
console.log(obj3);

//Promise.finally()
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new Error('testError'))

    });
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
