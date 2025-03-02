// Create a script.js file.
// Copy the directions from each question into the script.js file as comments.
// Answer the question within the script.js file
// Submit the script.js file on Blackboard

// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
// Prompt the user to enter their birth year using prompt() and store it in a variable.
// Based on their input, determine how many years old they are.
// Log the calculated age to the console: “Your age is:”

// let birthYear = prompt ("Please enter your birth year: ")
// let currentYear = 2025
// function calcAge() {
//     return(currentYear - birthYear)
// }
// console.log(calcAge());

// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
// Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
// Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

// let Principal = prompt ("What is the principal amount?")
// let Rate = prompt ("What is the rate of interest?")
// let Time = prompt ("What is the time in years?")
// let simpleInterest = (Principal * Rate * Time)/100
// function calculateSimpleInterest (){
//     return (simpleInterest)
// }
// console.log(calculateSimpleInterest());

// 3. Favorite Color Selector
// Create an array with three colors.
// Use a traditional function named addColor to add a new color to an array.
// Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
// Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “

// let arrayOfColors = [" Green", " Purple ", "Pink"];
// function addColors(arrayAsParameter) {
//     arrayAsParameter.unshift("Red")
// }
// addColors(arrayOfColors);
// console.log(arrayOfColors);
// let userInput = prompt ("Please choose a color to add")
// arrayOfColors.unshift()
// console.log("Updated colors: ", userInput + ", " + arrayOfColors)

// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
// Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
// If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
// Log the result to the console using: “Days until the event: “.

// function calculateDaysUntil (eventDate) {
//
//     const today = new Date();
//
//     const event = new Date(eventDate);
//
//     if (isNaN(event.getTime())) {
//         console.log("Please enter date in YYYY-MM-DD format")
//         return;
//     }
//     const timeDiff = event - today;
//
//     const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
//
//     if (daysRemaining > 0) {
//         console.log("Days until your event " + daysRemaining);
//     } else if (daysRemaining === 0) {
//         console.log("Your event is today");
//     } else {
//         console.log("The event has passed");
//     }
//     }
//
// let userEventDate = prompt("Enter the event date in the format YYYY-MM-DD:");
//
// function isValidDateFormat(dateStr) {
//     if (dateStr.length !== 10) {
//         return false;
//     }
//     if (dateStr.indexOf('-') !== 4 || dateStr.indexOf('-', 5) !== 7) {
//         return false;
//     }
//     const year = dateStr.substring(0, 4);
//     const month = dateStr.substring(5, 7);
//     const day = dateStr.substring(8, 10);
//
//     if (isNaN(year) || isNaN(month) || isNaN(day)) {
//         return false;
//     }
//     if (parseInt(month) < 1 || parseInt(month) > 12 || parseInt(day) < 1 || parseInt(day) > 31) {
//         return false;
//     }
//     return true;
// }
//
// while (!isValidDateFormat(userEventDate)) {
//     userEventDate = prompt("Invalid format. Please enter the event date in the format YYYY-MM-DD:");
// }
// calculateDaysUntil(userEventDate);


// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
// Takes one argument - user input for temperature
// Prompt the user to input the temperature in Celsius.
// Convert into Fahrenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
// "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “

// function classifyTemperature (celsius) {
//
//     let fahrenheit = (celsius * (9/5)) + 32 ;
//     let classify ;
//
//     if (fahrenheit > 100) {
//         classify = "Hot"
//     } else if (fahrenheit > 80 && fahrenheit < 100) {
//         classify = "Warm"
//     } else if (fahrenheit < 40) {
//         classify = "Cold"
//     } else {
//         classify = "Chilly"
//     }
//     console.log("The temperature is: " + fahrenheit);
//     console.log(classify)
// }
//     let userInput = Number(prompt("Enter temperature in Celsius: "));
//     if (isNaN(userInput)){
//         alert("Error: Please enter a number")
//     } else {
//         classifyTemperature(userInput)
//     }

// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
// Log the updated array to the console: “Updated students: ”

// let Students =
// [{name:"Alice", age:20},
// { name:"Bob", age:22},
// {name:"Charlie", age:18}
// ];
// console.log("Students before age change: ", Students)
//
// const updateStudentAge = (students, studentName, newAge) =>
//     students.map(student =>
//         student.name && student.name.toLowerCase() === studentName.toLowerCase()
//             ? { ...student, age: newAge }
//             : student
//     );
// let userInput = prompt("Enter a student's name to change their age: ").trim().toLowerCase();
// let validStudent = Students.some(student => student.name.toLowerCase() === userInput);
// if (!validStudent) {
//     console.log("Error. Student name does not exist")
// } else {
//     let newAge = Number(prompt("Enter the new age"))
//
//     if (isNaN(newAge) || newAge <= 0) {
//         console.log("Error. Please enter a valid age");
//     } else {
//         Students = updateStudentAge(Students, userInput, newAge);
//
//         console.log("Updated students: ", Students);
//     }
// }

// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
// Prompt the user to input a grade as a number.
// Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
// Log the result to the console using: “The grade classification is: “

// const classifyGrade = grade =>
//     grade >= 90 ? "A" :
//         grade >= 80 ? "B" :
//             grade >= 70 ? "C" :
//                 grade >= 60 ? "D" : "F" ;
//
// let userInput = Number(prompt("Enter a number for a grade").trim());
//
// console.log (isNaN(userInput) || userInput < 0 || userInput > 100
//     ? "Error. Please enter a valid number"
//     : `The grade is: ${classifyGrade(userInput)}`);

// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
// Use a fat arrow function named modifyItem to modify items in an array.
// Takes two arguments - the shopping list array and the prompted new item from user.
// Log the updated array to the console using: “Updated shopping list: “.

// let shoppingList = ["eggs", "butter", "flour"];
// console.log ("Shopping list before modifying: " + shoppingList);
//
// const modifyItem = (list, newItem) => {
//     list[0] = newItem
//     return list;
// };
// let userInput = prompt("Enter a new item to modify the shopping list")
//  if (userInput) {
//      shoppingList = modifyItem(shoppingList, userInput);
//      console.log ("Updated shopping list: " + shoppingList)
//  } else {
//      console.log ("Please enter another item")
//  }

// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
// Use the Date object to get the current day.
// Log the day of the week to the console using: “Today is: “

// const dayOfWeek = () => {
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return days[new Date().getDay()];
// };
// console.log(`Today is: ${dayOfWeek()}`);

// 10. How Long Until Graduation
// Use a fat arrow function to determine today’s date.
// Use the Date object to get the current day.
// Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.

// const getWeekday = () => {
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return days[new Date().getDay()];
// };
//
// const getOrdinalSuffix = day => {
//     if (day >= 11 && day <= 13) return "th";
//     return ["st", "nd", "rd"][(day % 10) - 1] || "th";
// };
//
// const getFormattedDate = () => {
//     let today = new Date();
//     let year = today.getFullYear();
//     let monthNames = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];
//     let month = monthNames[today.getMonth()];
//     let day = today.getDate();
//     let suffix = getOrdinalSuffix(day);
//     return `${year}, ${month} ${day}${suffix}`;
// };
//
// const daysUntilGraduation = () => {
//     let today = new Date();
//     let graduationDate = new Date(2025, 4, 17);
//     let timeDifference = graduationDate - today;
//     return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
// };
//
// console.log(`Today is: ${getWeekday()}`);
// console.log(getFormattedDate());
// console.log(`And you have ${daysUntilGraduation()} days left until graduation.`);
