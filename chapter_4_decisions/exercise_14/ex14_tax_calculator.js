// Write a simple program to compute the tax on an order amount.
// The program should prompt for the order amount and the state.
// If the state is "WI", then the order must be charged 5.5% tax.
// The program should display the subtotal, tax, and total
// for Wisconsin residents but display just the total for non-residents.

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

let taxCalculator = {
  properties: {
    orderAmount: {
      description: "What is the order amount?"
    },
    orderState: {
      description: "What is the state? "
    }
  }
}

const taxRate = 0.055
prompt.start

prompt.get(taxCalculator, (err, result) => {
  if (result.orderState == "WI") {
    const taxAmount = (result.orderAmount * taxRate).toFixed(2)
    console.log(`The subtotal is $${result.orderAmount}`)
    console.log(`The tax is ${taxAmount}`)
    console.log(`The total is $${(parseInt(result.orderAmount)+ parseFloat(taxAmount)).toFixed(2)}`)
  }
  else {
    console.log(`The total is $${parseFloat(result.orderAmount).toFixed(2)}`)
  }
})