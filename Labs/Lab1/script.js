// Create a script.js file.
// Copy the directions from each question into the script.js file as comments.
// Answer the question within the script.js file
// Submit the script.js file on Blackboard

// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
// Prompt the user to enter their birth year using prompt() and store it in a variable.
// Based on their input, determine how many years old they are.
// Log the calculated age to the console: “Your age is:”

// let birthdate = prompt ("What year were you born?")
// let x = 2025
// let age = x - parseInt(birthdate)
// console.log ("You are " + age + " years old !") ;

// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

// let Principal = prompt ("What is the principal amount?")
// let Rate = prompt ("What is the rate of interest?")
// let Time = prompt ("What is the time in years?")
// let calculateSimpleInterest = (Principal * Rate * Time)/100
// console.log("Your simple interest is: " + calculateSimpleInterest);

// 3. Favorite Color Selector
// Create an array with three colors.
// Use a traditional function named addColor to add a new color to an array.
// Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
// Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “

let arrayOfColors = ["Green", "Purple", "Pink"];
function addColors(arrayAsParameter) {
    arrayAsParameter.unshift("Red")
}
addColors(arrayOfColors);
console.log(arrayOfColors);
let userInput = prompt ("Please choose a color to add")
arrayOfColors.unshift()
console.log(userInput + arrayOfColors)
