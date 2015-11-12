// Write a program that converts currency. Specifically, convert euros to US dollars.
// Prompt for the amount of money in the euros you have, and prompt for the current
// exchange rate of the euro. Print out the new amount in US dollars. The formula
// for currency conversion is:

// amountTo = (amountFrom * rateFrom) / rateTo
// where:
//  amountTo is the amount in US dollars
//  amountFrom is the amount in euros
//  rateFrom is the curent exchange rate in euros
//  rateTo is the current exchange rate of the US dollar

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ""
prompt.delimiter = ""

let currencyConverter = {
  properties: {
    numEuros: {
      description: "How many euros are you exchanging? "
    },
    euroRate: {
      description: "What is the exchange rate? "
    }
  }
}

prompt.start

prompt.get(currencyConverter, function(err, result) {
  let amountTo = (result.numEuros * result.euroRate) / 100
  console.log(`${result.numEuros} euros at an exchange rate of ${result.euroRate} is ${amountTo.toFixed(2)} US dollars.`)
})