//take a number and square
// function squares(num){
//     return(num*num)
// }
// console.log(squares(5));

// let squares2 = function(num){
//     return num*num
// }
// console.log(squares2(6));

// //IIFE
// (function(){
//     console.log("Hello")
// })()

//convert to fat arrow
const squares2 = (num) => {
    return num*num
}
console.log(squares2(7))

//convert to fat arrow, remove parentheses
const squares3 = num => {
    return num*num
}
console.log(squares3(9))

//convert to fat arrow with an implied return
const squares4 = num => num*num
console.log(squares4(10))

//Convert to fat arrow with implied return
//Multiple lines
const area = (num1, num2) => num1*num2
console.log("Area: ", area(2,4))
