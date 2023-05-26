// Show all the ways to export a module

function example() {
  console.log('example');
}

// Way 0
module.exports = function example() {
  console.log('example');
};

// Way 1 
module.exports.example = function example() {
  console.log('example');
};

// Way 2
module.exports = example;

// Way 3
module.exports.example = example;

// Way 4
exports.example = example;

// Way 5
module.exports = {
  example,
};

// Way 6
exports = {
  example,
};
