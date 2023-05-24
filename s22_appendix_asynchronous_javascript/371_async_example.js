// 1
setTimeout(() => console.log('1', 'is the loneliest number'), 0);
setTimeout(() => console.log('2', 'can be as bad as one'), 1000);

// 2
Promise.resolve('hi').then((data) => console.log('3', data));

// 3
console.log('4', 'is a crowd');

// 4
setImmediate(() => console.log('5', 'is a mess'), 5000);
