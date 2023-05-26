const { read } = require('./response');
const { send } = require('./request');

function makeRequest(url, data) {
  send(url, data);
  return read();
}

console.log(makeRequest('www.google.com', 'data'));

/** Importing as request and response */
const request = require('./request');
const response = require('./response');

function makeRequest2(url, data) {
  request.send(url, data);
  return response.read();
}

console.log(makeRequest2('www.google.com', 'data'));
