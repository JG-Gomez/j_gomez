let numbers = [1, 2, 3]
//make a copy and use it to manipulate the data then reassign to numbers
let data = numbers.slice()
// append to the array
//push()
numbers.push(4)
console.log(numbers);
//pop removed the last element
let removedElement = numbers.pop()
console.log(removedElement);

//front of the array - prepending
numbers.unshift(100)
console.log(numbers);
let newResult = numbers.shift()
console.log(newResult);

//once perfect - reassign it back to numbers
numbers = data

// more of a string method
// .trim
// "                      Cruz is "
let message = "                      Cruz is "
console.log (message.trim());

let students = ["ALice", "Bob", "Charlie"];
console.log(students)
students.push("Diana")
console.log(students);
let removeLast = students.pop()
console.log(removeLast);
students.unshift("Eve")
console.log(students);
let newFirst = students.unshift()
console.log(newFirst);
let removeFirst = students.shift()
console.log(removeFirst);