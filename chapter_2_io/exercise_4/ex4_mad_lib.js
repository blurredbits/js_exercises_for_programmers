// Create a simple mad-lib program that prompts for a noun,
// a verb, an adverb, and an adjective and inject those
// into a stroy that you create.

'use strict';

var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

let noun, verb, adjective, adverb = "";


// TODO Clean up this nested mess!

// review: readline has a rl.on('line', function(line) {}) event

rl.question("Enter a noun: ", function(input_noun) {
  noun = input_noun;

  rl.question("Enter a verb: ", function(input_verb) {
    verb = input_verb;

    rl.question("Enter an adjective: ", function(input_adjective) {
      adjective = input_adjective;

      rl.question("Enter an adverb: ", function(input_adverb) {
        adverb = input_adverb;

        console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?`);
        console.log(`That's hilarious!`);

        rl.close();
      })
    })
  })
})

