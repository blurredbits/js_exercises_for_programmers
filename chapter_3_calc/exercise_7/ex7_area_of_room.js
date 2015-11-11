// Create a program that calculates the area of a room. Prompt the
// user for the length and width of the room in feet. Display the area
// in both square feet and square meters.

'use strict';

var prompt = require('prompt');

// Blank prompt
prompt.message = "";
prompt.delimiter = "";

var roomDimensions = {
  properties: {
    length: {
      description: "What is the length of the room in feet? "
    },
    width: {
      description: "What is the width of the room in feet? "
    }
  }
}

const meterConversion = 0.09290304

class AreaCalculator {

  areaInFeet(length, width) {
    return parseInt(length) * parseInt(width);
  }

  areaInMeters(length, width) {
    return this.areaInFeet(length, width) * meterConversion; 
  }
}


prompt.start();

prompt.get(roomDimensions, function(err, results) {
  let calc = new AreaCalculator
  console.log(`You enter dimensions of ${results.length} feet by ${results.width} feet.`);
  console.log(`The area is: `);
  console.log(`    ${calc.areaInFeet(results.length, results.width)} square feet`);
  console.log(`    ${calc.areaInMeters(results.length, results.width)} square meters`);
});

