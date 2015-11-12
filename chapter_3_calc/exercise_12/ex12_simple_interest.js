// Create a program that computes simple interest. Prompt for the principal
// amount, the rate as a percentage, the time, and display the ammount
// accrued (principla + interest)

// The formula for simpe interest is A = P(1 + rt), where P is the
// principal amount, r is the annual rate of interest, t is the number
// of years the amount is invested. A is the amount at the end of the 
// investment

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

let interestCalculator = {
  properties: {
    principal: {
      description: "Enter the principal: "
    },
    interestRate: {
      description: "Enter the rate of interest: "
    },
    numberYears: {
      description: "Enter the number of years: "
    }
  }
}

prompt.start

prompt.get(interestCalculator, function(err, result){
  let interestRate = result.interestRate / 100
  let endInvestmentAmount = result.principal * ( 1 + (interestRate * result.numberYears))
  console.log(`After ${result.numberYears} years at ${result.interestRate}%, the investment will be worth $${endInvestmentAmount.toFixed(0)}`)
})