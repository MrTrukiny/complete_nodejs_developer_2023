const promise = (condition) =>
  new Promise((resolve, reject) => {
    if (condition) {
      resolve('Stuff worked');
    } else {
      reject('Error, it broke');
    }
  });

// Log the result of the promise
promise(true).then((result) => console.log(result));

// Chaining promises
promise(true)
  .then((result) => result + '!')
  .then((result2) => {
    console.log(result2);
    throw Error;
  })
  .catch(() => console.log('error!'));

// Then after catch
promise(false)
  .then((result) => result + '!')
  .then((result2) => result2 + '?')
  .catch((error) => console.log('Error:', error)) // Catch only catches errors before it
  .then((result3) => {
    console.log(result3 + '!');
    throw Error;
  });
