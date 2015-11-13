// Create a program that prompts for your weight, gender, number of drinks,
// the amount of alcohol by volume of drinks consumed, and the amount of time
// since your last drink. Calculate your blood alcohol content (BAC) using this
// formula:

// BAC = (A * 5.14 / W * r) - 0.15 * H

// Where:
// A is total alcohol consumed, in ounces(oz).
// W is body weight in pounds
// r is the alcohol distribution ration
//   0.73 for men
//   0.66 for women
// H is number of hours since the last drink

// Display whether or not it's legal to drive by comparing the blood alcohol content to 0.08

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

let bacPrompter = {
  properties: {
    alcoholConsumed: {
      description: "How many OZ of alcohol were consumed? "
    },
    weight: {
      description: "What is your weight? "
    },
    gender: {
      description: "What is your gender (M/F)? "
    },
    hoursLastDrink: {
      description: "How many hours ago was your last drink? "
    }
  }
}

class bacCalculator {

  constructor(bacInput) {
    this.bacInput = bacInput
  }

  alcoholDistRatio() {
    if (this.bacInput.gender == 'M') {
      return 0.73
    }
    else {
      return 0.66
    }
  }

  bac() {
    const bac = this.bacInput
    return ( ( bac.alcoholConsumed * 5.14 ) / ( bac.weight * this.alcoholDistRatio() ) ) - ( 0.15 * bac.hoursLastDrink )
  }
}

prompt.start
prompt.get(bacPrompter, (err, result) => {
  const bacCalc = new bacCalculator(result)
  console.log(`Your BAC is ${bacCalc.bac().toFixed(2)}`)
  if (bacCalc.bac() >= 0.08) {
    console.log('It is not legal for you to drive.')
  }
  else {
    console.log('It is legal for you to drive - but be careful!')
  }
})