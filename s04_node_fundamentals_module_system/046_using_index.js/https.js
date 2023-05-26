const internals = require('./internals');
// const { read } = require('./response');
// const { send } = require('./request');

function makeRequest(url, data) {
  internals.send(url, data);
  return internals.read();
}

console.log(makeRequest('www.google.com', 'data'));

/** Importing as send and read */
const { send, read } = require('./internals');

function makeRequest2(url, data) {
  send(url, data);
  return read();
}

console.log(makeRequest2('www.google.com', 'data'));
