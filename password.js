const readline = require('readline');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let FgRed = "\x1b[31m\x1b[0m"
let FgGreen = "\x1b[32m\x1b[0m"

reader.question("Welcome to the Password Validator. Please enter a password to be validated: ", function(input) {
    function checkForNumbers(string) {
        let result = string.split("").find(el => !isNaN(el))
        if (result) {
            return true
        } else {
            return false
        }
    }
    if (input.length >= 10 && checkForNumbers(input)) {
        console.log(FgGreen, `
            Your password was validated succesfully.
            Great job!
        `)
    } else {
        console.log(FgRed, `
            Your password failed the validation.
            Run 'node password.js' to attempt again.
        `)
    }
    reader.close()
})