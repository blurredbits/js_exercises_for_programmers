// Create a simple self-checkout system. Prompt for the prices
// and quantities of three items. Calculate the subtotal of the items.
// Calculate the tax using a rate of 5.5%. Print out the the line items
// with the quantity and total, and then print out the subtotal, tax amount and total.

'use strict'

let prompt = require('prompt')

//blank prompt
prompt.message = ""
prompt.delimiter = ""


let shoppingCart = {
  properties: {
    itemOnePrice: {
      description: "Enter the price of item 1: "
    },
    itemOneQty: {
      description: "Enter the quantity of item 1: "
    },
    itemTwoPrice: {
      description: "Enter the price of item 2: "
    },
    itemTwoQty: {
      description: "Enter the quantity of item 2: "
    },
    itemThreePrice: {
      description: "Enter the price of item 3: "
    },
    itemThreeQty: {
      description: "Enter the quantity of item 3: "
    }
  }
}

const taxRate = 0.055

prompt.start

prompt.get(shoppingCart, function(err, result) {
  let subTotal = (result.itemOnePrice * result.itemOneQty) +
                 (result.itemTwoPrice * result.itemTwoQty) +
                 (result.itemThreePrice * result.itemThreeQty)

  let tax = subTotal * taxRate
  let total = subTotal + tax

  console.log(`Subtotal: $${subTotal.toFixed(2)}`)
  console.log(`Tax: $${tax.toFixed(2)}`)
  console.log(`Total: $${total.toFixed(2)}`)
})