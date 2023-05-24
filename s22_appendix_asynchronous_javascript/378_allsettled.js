const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

// Comment and uncomment the following lines to see the difference between Promise.all and Promise.allSettled:
// Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
