const mission = process.argv[2];

if (mission === 'learn') {
  console.log('Time to write some Node.js code!');
} else {
  console.log(`Is ${mission} really what you want to do?`);
}
