// Way 1
/* module.exports = {
  request: require('./request'),
  response: require('./response'),
}; */

// Way 2
/* const request = require('./request');
const response = require('./response');

module.exports = {
  send: request.send,
  read: response.read,
}; */

// Way 3
module.exports = {
  ...require('./request'),
  ...require('./response'),
};
