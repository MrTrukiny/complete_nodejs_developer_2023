// Should this code run in order or not? Why?
setTimeout(() => console.log('Congratulations to all the winners!'), 2000);

// Rabbit finishes after the turtle no matter that the code is first
setTimeout(() => console.log('🐇 finishes second!'), 1000);

// Turtle finishes before the rabbit
console.log('🐢 finishes first!!');
