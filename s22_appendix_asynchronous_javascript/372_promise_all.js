const promise = (condition) =>
  new Promise((resolve, reject) => {
    if (condition) {
      resolve('Stuff worked');
    } else {
      reject('Error, it broke');
    }
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'POOKIE');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Is it me you are looking for?');
});

Promise.all([promise(true), promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

/** Example 2 */
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
  .then((results) => {
    console.log(results[0][0]);
    console.log(results[1][0]);
    console.log(results[2][0]);
  })
  .catch(() => console.log('error'));
