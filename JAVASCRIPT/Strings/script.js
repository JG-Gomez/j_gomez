//data types
//Strings
//
// let greeting  = "hello!"
// console.log(greeting);
//
//
// //ex of an object
//
// let person = {
//     fName: "Jeremiah",
//     lName: "Gomez",
//     age: 20,
//     fullName: function () {
//         console.log("First name is " + this.fName + " and age is " + this.age);
//     }
// }
// console.log(person.lName);
// person.fullName()
//
// // toUpperCase(), toLowerCase()
// console.log(person.lName.toLocaleLowerCase());

// let lName = "gomez"
// console.log(lName.includes("z"));
// console.log(lName.includes("Z"));
//
// //length
// console.log("How many characters in lName: ", lName.length);
//
// //slice
// let newVar;
// newVAr = lName.slice(1,2)
// console.log(newVar);
// ["g", "o", "m", "e", "z"]
// [3, 5, 7, 9, 10]

//concatenate
let age = 25
let sentence = "I love " + 'chocolate'
console.log(sentence);
let sentence1 = sentence + " and other stuff"
console.log(sentence1);
//template literals
let sentence2 = `${age > 21 ? "yeah!" : "Boooo"} and other stuff!`
console.log(sentence2);

console.log("Simple test: ", sentence2)