// Create a program that displays the number of characters in an input string.

var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question("What is the input string? ", function(input) {
  console.log(`${input} has ${input.length} characters.`);

  rl.close();
});