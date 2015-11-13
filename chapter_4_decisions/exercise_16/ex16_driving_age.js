// Write a program that asks the user for their age and compare it to the
// legal driving age of sixteen. If the user is sixteen or older, then the
// program should display "You are old enough to legally drive." If the user is
// under sixteen, the program should display "You are not old enough to legally drive."

'use strict'

let prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

let drivingTest = {
  properties: {
    age: {
      description: "What is your age? "
    }
  }
}

prompt.start

prompt.get(drivingTest, (err, results) => {
  if (results.age >= 16) {
    console.log("You are old enough to legally drive.")
  }
  else {
    console.log("You are not old enough to legally drive.")
  }
})