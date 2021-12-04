//console.log(windows);
console.log(globalThis);

const fooo = 'ads' ?? 'default';
console.log(fooo);

//Optional chaining
const user = {};
console.log(user?.profile?.email)