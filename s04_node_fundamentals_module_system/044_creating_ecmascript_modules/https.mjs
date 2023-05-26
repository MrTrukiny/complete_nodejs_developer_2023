import { read } from './response.mjs';
import { send } from './request.mjs';

function makeRequest(url, data) {
  send(url, data);
  return read();
}

console.log(makeRequest('www.google.com', 'data'));

/** Importing as request and response */
import request from './request.mjs';
import response from './response.mjs';

function makeRequest2(url, data) {
  request.send(url, data);
  return response.read();
}

console.log(makeRequest2('www.google.com', 'data'));
