// Calculate gallons of paint need to paint the ceiling of a room.
// Prompt for the length and width, and assume one gallon
// covers 350 square feet. Display the number of gallons needed to
// paint the ceiling as a whole number.

'use strict';

let prompt = require('prompt')

// blank prompt
prompt.message = ""
prompt.delimiter = ""

let paintedArea = {
  properties: {
    length: {
      description: "What is the length of the room in feet? "
    },
    width: {
      description: "What is the width of the room in feet? "
    }
  }
}

const gallonCoverage = 350

prompt.start

prompt.get(paintedArea, function(err, result) {
  let squareFootage = result.length * result.width
  let gallonsRequired = Math.ceil(squareFootage / gallonCoverage )
  console.log(`You will need to purchase ${gallonsRequired} gallons of paint to cover ${squareFootage} square feet.`)
})
