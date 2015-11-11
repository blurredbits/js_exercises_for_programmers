// Write a program that prompts for two numbers.
// Print the sum, difference, product and quotient of
// those numbers.

'use strict';

var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

let firstNumber, secondNumber = 0;

rl.question("What is the first number? ", function(firstNumberInput) {
  firstNumber = parseInt(firstNumberInput);

  rl.question("What is the second number? ", function(secondNumberInput) {
    secondNumber = parseInt(secondNumberInput);
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
    rl.close();
  })
})