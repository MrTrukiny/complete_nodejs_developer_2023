const http = require('http');

http
  .request('www.google.com', (res) => {
    res.on('data', (chunk) => {
      console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  })
  .end();

// req.end() is required to actually send the request.

/** Using destructuring to get the request object from the http.request() method. */
const { request } = require('http');
request('www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
}).end();

/** Using https module */
const { request } = require('https');

request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
}).end();

/** Using the get() method we won't need to call req.end() */
const { get } = require('https');

get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});
