// ch 1 Data types

// printing to the console 

// console.log("Hello world")


// variables, constants and comments

var num = 10
var num = 29 // redeclaration is possible using var

// console.log(num)

let n1 = 23
// let n1 = 43

// will throw error that let can't be redeclared like var
// Uncaught SyntaxError: Identifier 'n1' has already been declared (at index.js:14:5)

// console.log(n1)


// const c1

// Uncaught SyntaxError: Missing initializer in const declaration (at index.js:22:7)
// console.log(c1)

const c2 = 'constant declared'
// const c2 = 'redeclare'

// Uncaught SyntaxError: Identifier 'c2' has already been declared (at index.js:28:7)

// const can't be redeclared

// c2 = 'redeclaring'
// assignnment to constant variable is not possible

// Uncaught TypeError: Assignment to constant variable.
//     at index.js:34:4
// console.log(c2)



// datatypes

/**
 * number - 1, 2, 3, 4, 5, 6
 * string - 'akki' or "akki"
 * boolean - true/false
 * null - generally used to define values when undefined not needed
 * undefined - given to undefined variables by default or it can be given manually
 * object
 * symbol - advanced stuff
 */

// strings

let firstName = 'akki'
let lastName = 'nai'

// console.log(firstName,lastName)  // gives a space between each variable by default 

let fullName = firstName + lastName // won't give a space betn each variable as it is concatinating

let fullNameWithSpace = firstName + " " + lastName // if we want space then we have to give space by self

// template literals

let fullNameString = `My name is ${firstName} ${lastName}`


// console.log(fullName)
// console.log(fullNameWithSpace)
// console.log(fullNameString)

// getting string character using array 
// console.log(firstName[0]) // first character of our string is 'a'
// console.log(firstName[5]) // we don't have any character at that position so it is undefined


// string methods

// console.log(firstName.toLowerCase())
// console.log(firstName.toUpperCase())
// console.log(firstName.indexOf('i'))
// console.log(firstName.indexOf('k'))

// let hobbies  = "        coding reading running         "

// // trim method
// let result = hobbies.trim()
// console.log(hobbies)
// console.log(result)

// console.log(hobbies.indexOf('coding'))
// console.log(result.indexOf('coding'))

// console.log(result.lastIndexOf('ing')) // returns last occurance of given string
// console.log(result.indexOf('ing')) // returns first occurance
// console.log(result.indexOf('gaming')) // if not found will return -1

// // includes method

// console.log(result.includes('running'))
// console.log(result.includes('gaming'))
// // returns true or false depending if the string is present or not


// slice method

// let str = 'nicecoder'
// console.log(str.slice(0,4)) // slice(starting_position, ending position - 1)
// // slice will exclude the last specified character 
// // suppose if slice(0,8) is given then entire string from 0 to 7 will be taken

// // note: string methods doesn't mutate the original string it just returns a new string which can be stored to new variable

// let res = str.slice(0,4)
// console.log(res)



// // split method

// let favColors = "Brown Blue Black Gray"
// let favColorsComma = "Brown,Blue,Black,Gray"
// let arrColors = favColors.split(' ')
// let arrColorsComma = favColorsComma.split(',')

// // split is used to split the string by a character or string
// // split(separator)

// console.log(favColors)
// console.log(arrColors)
// console.log(arrColorsComma)


// javascript strings are immutable

// let str = 'hello'

// str = str + ' hello'

// console.log(str)


// numbers

let score = 50

// console.log(score, typeof score)

// mathamatical operators - +, -, *, /, %, **

// console.log(12 + 12)
// console.log(12 - 12)
// console.log(12 * 12)
// console.log(12 / 12)
// console.log(12 % 12)
// console.log(12 ** 2)

let res = 25 * 2 + (4 * 3) - 8 / 2 % 4;
// Using priority and precedence
/**
 * 1 () brackets
 * 2 ** power operator
 * 3 * / (from left to right)
 * 4 + - (from left to right)
 */

// console.log(res)

// concatination of number 

// console.log('My total score - ' + res)


// loose equality (==) vs strict equality (===)

// loose equality (==)

// let age = 22

// console.log(age == '22') //focus only on value but not type

// // this will return true and type conversion of string will be done by self

// // strict equality (===)

// console.log(age === '22') // focus on both value and type
// // this will return false and type conversion of string will not happen here 

// console.log(age != '22') // as num and string will be checked it will be same so it will return false
// console.log(age !== '22') // as num and string will be checked and they won't be same so it will return true


// type conversion

// let stringType = '54'

// console.log(stringType, typeof stringType)

// // Number method

// let numberType = Number(stringType)
// console.log(numberType, typeof numberType)


// imp note: in  Number method passing string  must be a valid number to convert it or it will return nan
// console.log(Number("baavan"))

// converting number to string

// let a = 54

// aStr = String(a)
// console.log(a, typeof aStr)


// // Booleans

// let bool = Boolean(-1) // any string except 0 or empty string will be true, else it will return false

// console.log(bool)


// arrays

const dishes = ['paneer', 'noodle', 'potato twister']

console.log(dishes[0])
console.log(dishes[1])
console.log(dishes[2])
console.log(dishes[3])

// modify the array

dishes[3] = 'burger'

console.log(dishes[3])


// array methods

// join method
// join

console.log(dishes.join('-'))

// indexOf

console.log(dishes.indexOf('burger'))

const newDishes = ['punjabi', 'gulabjamboo']

console.log(dishes.concat(newDishes))

// concat will concat new elements at the end of current element and that array is not mutated. the returned array is completely new array


// // length property 

// const updatedDishes = dishes.concat(newDishes)

// console.log(dishes.length)
// console.log(newDishes.length)
// console.log(updatedDishes.length)

// // push method
// // mutator method, means it will change the array 

// console.log(updatedDishes.push("dhosa")) // push method will return the updated array length after adding data to the array
// console.log(updatedDishes)

// console.log(updatedDishes.pop()) // pop method will return the last removed array  element


// boolean value and comparision operator

let booleanType = true
let stringType = "true"

console.log(typeof booleanType, typeof stringType)

// Methods returns boolean value

let email = 'akki@mail.com'


let booleanValue = email.includes('@')

console.log(booleanValue)

// comparision operator returns boolean value   
// ==, ===, !=, !==, <, >, <=, >=