// Callback Hell Example 2

// This code is not very readable and is hard to maintain
// 1. Fix this!
// 2. How many callbacks are there?
// 3. Refactor this code to use Promises with new Promise() and .then() and .catch()
// 4. Refactor this code to use async/await

const fs = require('fs');

const FILE_NAMES = ['file1.txt', 'file2.txt', 'file3.txt'];

fs.readFile(FILE_NAMES[0], 'utf8', (err, data) => {
  // Big Callback 1
  if (err.errno === -2) {
    fs.writeFile(FILE_NAMES[0], 'Hello World!', (err) => {
      // Callback 1.1 (nested)
      if (err) throw err;
      console.log(`${FILE_NAMES[0]} was created!`);
      fs.readFile(FILE_NAMES[0], 'utf8', (err, data) => {
        if (err) throw err;
        // Callback 1.2 (nested)
        console.log(data);
      });
    });
  } else {
    console.log('The error', err);
    throw err;
  }

  fs.readFile(FILE_NAMES[1], 'utf8', (err, data) => {
    // Big Callback 2
    if (err.errno === -2) {
      fs.writeFile(FILE_NAMES[1], 'Hello World!', (err) => {
        // Callback 2.1 (nested)
        if (err) throw err;
        console.log(`${FILE_NAMES[1]} was created!`);
        fs.readFile(FILE_NAMES[1], 'utf8', (err, data) => {
          // Callback 2.2 (nested)
          if (err) throw err;
          console.log(data);
        });
      });
    } else {
      throw err;
    }

    fs.readFile(FILE_NAMES[2], 'utf8', (err, data) => {
      // Big Callback 3
      if (err.errno === -2) {
        fs.writeFile(FILE_NAMES[2], 'Hello World!', (err) => {
          // Callback 3.1 (nested)
          if (err) throw err;
          console.log(`${FILE_NAMES[2]} was created!`);
          fs.readFile(FILE_NAMES[2], 'utf8', (err, data) => {
            // Callback 3.2 (nested)
            if (err) throw err;
            console.log(data);
          });
        });
      } else {
        throw err;
      }
    });
  });
});

// Delete all the files using a loop
for (let i = 0; i < FILE_NAMES.length; i++) {
  fs.unlink(FILE_NAMES[i], (err) => {
    if (err) throw err;
    console.log(`${FILE_NAMES[i]} was deleted!`);
  });
}
