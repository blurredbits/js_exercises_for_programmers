// Write a program to compute the value of an investment compounded over time.
// The program should ask for the starting amount, the number of years to invest,
// the interest rate, and the number of periods per year to compound.

// The formula is:

// A = P(1 + r/n)^nt
// where:
// P is the principal amount
// r is the annual rate of interest
// t is the number of years the amount is invested.
// n is the number of times the interest is compounded per year.

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

let compoundInterest = {
  properties: {
    principal: {
      description: "What is the principal amount? "
    },
    rate: {
      description: "What is the rate? "
    },
    numYears: {
      description: "What is the number of years? "
    },
    compoundTime: {
      description: "What is the number of times the interest is compounded per year? "
    }
  }
}

class CompoundCalculator {

  constructor(calcValues) {
    this.calcValues = calcValues
  }

  convertRate(rate) {
    return rate / 100
  }

  calcInterest() {
    let calc = this.calcValues
    let base = (1 + (this.convertRate(calc.rate)) / (calc.compoundTime));
    let power = calc.compoundTime * calc.numYears
    return calc.principal * Math.pow(base, power)
  }
}


prompt.start

prompt.get(compoundInterest, function(err, results) {
  let calc = new CompoundCalculator(results)
  console.log(`$${results.principal} invested at ${results.rate}% for ${results.numYears} compounded ${results.compoundTime} times per year is $${calc.calcInterest().toFixed(2)}`)
})