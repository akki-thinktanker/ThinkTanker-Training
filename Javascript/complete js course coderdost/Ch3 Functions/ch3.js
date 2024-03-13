// Functions

// It is simply a piece of code which we can use in our program many times.

// It is just like a variable holding some piece of code


// // function declaration
// function helloWorld(){
//      console.log("Hello world")
// }

// // function calling
// helloWorld()


// function expression

// // declare
// const fun = function(){
//     console.log("This is function expression")
// }

// // calling
// fun()


// // passing value (Arguments and parameters)

// let invite = function(name='defaultName', time='night') // this is parameter. //variable is local to the function
// {
//     console.log(`Welcome! ${name}! You are invited on our event at ${time}`)
// }

// invite("Akki") //argument is passed while calling a function
// invite() // if no value is given then that value is undefined
// invite("vivek", "Morning") 


// // Return value. How to return value from function

// let ageCalculation = function(birthYear, currentYear=2024){
//     let age = currentYear - birthYear;
//     console.log(`Your current age is = ${age}`)

//     return age;

//     // console.log("After return no line of code will be executed")
// }

// let functionResult = ageCalculation(2003)

// console.log(functionResult)



// arrow function

/**
 * Special form of function expression
 * it allows us to write function more fast because
 * no need to use function keyword
 * no need to use paranthesis () in case of single parameter
 * no need to use curely {}  brackets if single line of code in function
 * no  need to write return statement if single line of code in function    
 */

// let invite = (name) => `My name is ${name}`



// console.log(invite('akki'))



// passing function as an argument
// Higher order functions - callbacks


// Passing function as an argument
// Higher order function - callbacks


// let upperCase = function(str){
//     return str.toUpperCase();
// }

// let lowerCase = function(str){
//     return str.toLowerCase();
// }

// let transformer = function(str, fun){
//     return fun(str)
// }

// console.log(upperCase('helo world'))

// console.log(transformer("HelouU CoMDers", lowerCase))


// // functiton returning another function

// let compliment = function(msg){
//     return function(name){
//         console.log(`${msg} ${name}`)
//     }
// }

// compliment('Good Morning!')('Akash') // this is also example of higher order function

// // 2nd method 

// let complimented = compliment("You are good coder")

// complimented("Akki")

// // compliment is higher order function


// Immediately Invoked Function Expression
// Executed only once

// (function(name){
//     console.log("This function will never execute again", name)
// })('IIFE')



// setTimeOut and setInterval

// setTimeOut -> Run function "once" after "interval" of time

// setInterval -> Run function repeatedly, starting after the interval of time, then repeating..


// setTimeout(func, delay, arg1, arg2) // arg1 and arg2 are arguments given to first function which is passed

// // setTimeOut will run once after the execution is done
// const greet = (name) => {
//     console.log(`Welcome to ThinkTanker ${name}`)
// }

// setTimeout(greet, 3000, 'akki');

// // setInterval will run again and again after delay
// // setInterval(function, delay, args...)

// setInterval(greet, 2000, 'akki')


// Hoisting
// variable "declarations" are "hoisted" towards "top" of their scope

// test = 'akki'
// console.log(test)
// var test

// let and const are not hoisted so this will not happen  with them and that's why it is highly recommanded that we use let and const as per latest standards 

// function declaration after function calling will work due to hoisting

// test()

// function test(){
//     console.log("this is testing function")
// }


// not function expression or arrow function

// test()

// let test = () => {
//     console.log("this is testing function")
// }


// Calculator using higher order function

// const add = (a,b) => {
//     return a + b;
// }


// const sub = (a,b) => {
//     return a - b;
// }


// const mul = (a,b) => {
//     return a * b;
// }


// const div = (a,b) => {
//     return a / b;
// }



// const calc = (fx, a, b) => {
//     return fx(a,b)
// }


// const addition = calc(add, 12,12)
// const subtraction = calc(sub, 12,2)
// const multiplication = calc(mul, 12,2)
// const division = calc(div, 12,2)

// console.log(addition)
// console.log(subtraction)
// console.log(multiplication)
// console.log(division)





