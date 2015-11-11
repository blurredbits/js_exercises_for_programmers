// Create a program that determines how many years you have left
// until retirement and the year you can retire. It should prompt
// you for your current age and the age you want to retire. Display
// the output.

'use strict';

var prompt = require('prompt');

// Blank prompt
prompt.message = "";
prompt.delimiter = "";


var retirementCalculator = {
  properties: {
    currentAge: {
      description: "What is your current age? ",
    },
    retirementAge: {
      description: "At what age would you like to retire? ",
    }
  }
}

let yearsUntilRetirement, currentYear = 0;

prompt.start();

prompt.get(retirementCalculator, function(err, results) {

  yearsUntilRetirement = parseInt(results.retirementAge) - parseInt(results.currentAge);
  currentYear = new Date().getFullYear();

  console.log(`You have ${yearsUntilRetirement} years left until you can retire.`);
  console.log(`It's ${currentYear}, so you can retire in ${currentYear + yearsUntilRetirement}`);
});