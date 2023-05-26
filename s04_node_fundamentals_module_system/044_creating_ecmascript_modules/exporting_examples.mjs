// Show all the ways to export a module

function example() {
  console.log('example');
}

// Way 0
export function example() {
  console.log('example');
};

// Way 1 
export { example };

// Way 2
// export default example;

// Way 3
export default {
  example,
};
