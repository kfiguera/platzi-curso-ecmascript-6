const helloWord = (data) => {
    return new Promise((resolve, reject) => {
        (data)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};
const helloAsync = async () => {
    const hello = await helloWord(true);
    console.log(hello);
}
helloAsync();
const anotherFunction = async () => {
    try {
        const hello = await helloWord(false);
        console.log(hello);
    } catch (e) {
        console.log(e);
    }
}
anotherFunction();