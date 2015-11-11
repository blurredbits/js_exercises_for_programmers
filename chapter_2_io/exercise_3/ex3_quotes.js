// Create a program that prompts for a quote and an author.
// Display the quotation and author.
'use strict';

var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

let quote, author = "";

rl.question("What is the quote? ", function(input_quote) {
  quote = input_quote;

  rl.question("Who said it? ", function(input_author) {
    author = input_author;
    console.log(`${author} says, "${quote}"`);
    rl.close();
  });
});



