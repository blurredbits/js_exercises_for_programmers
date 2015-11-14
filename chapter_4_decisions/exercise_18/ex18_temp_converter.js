// Create a program that converts temperatures from Fahrenheit to Celsius or
// from Celsius to Fahrenheit. Prompt for the starting temperature. The program
// should prompt for the type of conversion and the perform the conversion.

'use strict'

const prompt = require('prompt')

// blank prompt
prompt.message = ''
prompt.delimiter = ''

const convPrompter = {
  properties: {
    typeConversion: {
      description: "Press C to convert from Fahrenheit to Celsius.\nPress F to convert from Celsius to Fahrenheit.\nYour choice: "
    }
  }
}

const celsiusPrompter = {
  properties: {
    tempCelsius: {
      description: "Please enter the temperature in Celsius: "
    },
  }
}

const fahrenheitPrompter = {
  properties: {
    tempFahrenheit: {
      description: "Please enter the temperature in Fahrenheit"
    }
  }
}

prompt.start

prompt.get(convPrompter, (err, results) {
  if (results.typeConversion == "C") {
    let = cel
    prompt.get(celsiusPrompter, (err, result) {

    })
  }
  else {

  }
})