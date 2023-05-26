const axios = require('axios');

axios
  // Add one more w to www.google.com to see the error
  .get('https://www.google.com')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log('This will always be executed');
  });
