// Write a programto evenly divide pizza. Prompt for the number
// of people, the number of pizzas, and the number of slices
// per pizza. Ensure that the number comes out even. Display
// the number of pieces of pizza each person should get.
// If there are leftovers, show the number of leftover pieces.

'use strict';

let prompt = require('prompt')

// blank prompt
prompt.message = ""
prompt.delimiter = ""

let pizzaParty = {
  properties: {
    numberPeople: {
      description: "How many people? "
    },
    numberPizzas: {
      description: "How many pizzas do you have? "
    },
    slicePerPizza: {
      description: "How many slices per pizza? "
    }
  }
}

prompt.start()

prompt.get(pizzaParty, function(err, results) {
  let pizzaSlices = results.numberPizzas * results.slicePerPizza
  let pizzaPerPerson = Math.floor(pizzaSlices / results.numberPeople)
  let leftOvers = pizzaSlices % results.numberPeople

  console.log(`${parseInt(results.numberPeople)} people with ${parseInt(results.numberPizzas)} pizzas.`)
  console.log(`Each person gets ${pizzaPerPerson} pieces of pizza.`)
  console.log(`There are ${leftOvers} leftover pieces.`)
})