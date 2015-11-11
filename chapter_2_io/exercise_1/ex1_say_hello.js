// Create a program that prompts for your name and prints a greeting using your name.

var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name) {
  console.log(`Hello, ${name}, nice to meet you!`);

  rl.close();
});
