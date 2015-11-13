// Create a simple program that validate user login credentials. The program
// must prompt the user for a username and password. The program should compare
// the password given by the user to a known password. If the password matches, 
// the program should display "Welcome!". If it doesn't match, the program
// should display "I don't know you."

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

let passwordPrompt = {
  properties: {
    username: {
      description: "What is your username? "
    },
    password: {
      description: "What is the password? "
    }
  }
}

prompt.start

prompt.get(passwordPrompt, (err, result) => {
  if (result.password == 'abc$123') {
    console.log("Welcome!")
  }
  else {
    console.log("I don't know you.")
  }
})