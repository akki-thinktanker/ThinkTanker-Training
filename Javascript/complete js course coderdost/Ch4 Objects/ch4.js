// Introduction to objects in javascript

// "use strict"

// let car = {
//     color: "Black",
//     model: 2022,
//     company: "Honda"
// }

// console.log(car)

// // accessing js object properties

// console.log(car['color']) // using square brackets
// console.log(car['model'])
// console.log(car.company) // using dot and then property name, use this now


// let propertyName = 'model'

// console.log(car[propertyName]) // use square bracket method to access object properties dynamically

// console.log(car.company) // for accessing directly property name    


// // modify object

// car.color = 'brown'
// console.log(car.color)



// // Delete properties of object

// let obj = {
//     prop1: 'value1',
//     prop2: 'value2',
// }


// // for deleting property from object, not just making it blank, it will remove it from object
// let returnVal = delete obj.prop1

// // it always returns true.

// console.log(returnVal)

// console.log(obj.prop1)


// Function vs Methods

// functions

// let ageCalculate = function(birthYear)
// {
//     let age = 2023 - birthYear
//     console.log(`Current age: ${age}`)
// }

// ageCalculate(2003)

// // method 

// // It is nothing but an object property (key) holding function as "value"

// let person = {
//     ageCalculate: function(birthYear){
//         let age = 2023 - birthYear;
//         return age;
//     }
// }

// // function declared inside object is considered as methods of that object
// console.log(`current age: ${person.ageCalculate(2003)}`) 



// this keyword

// In Each method we have an access of special keyword called 'this'

// 'this' keyword represents the object. 'calling' the 'method' in which this is 'present'


// ex

// let person = {
//     firstName: 'akki',
//     lastName: 'nai',
//     city: 'ahmedabad',
//     designation: 'Nodejs Developer',
//     getSummary: function (){
//         return `${this.firstName} is from ${this.city} and he is ${this.designation}`
//         // return this // this will return the entire object 
//     }
// }


// console.log(person.getSummary())

// // step 1 check in which method we use "this" keyword
// // step 2 owner of that method(who is calling those method)



// forEach method of array

// its another type of loop which we used to traverse over the array

let dishes = ['biryani', 'paneer', 'manchurian', 'noodle', 'dhokla', 'burger']

// // using for loop

// for(let i =0;i<dishes.length; i++)
// {
//     console.log(dishes[i])
// }


// using forEach method

// dishes.forEach(function(element){
//     console.log(element)
// })


// // objects inside array

// let blockList = [{userName: 'john', reason: 'abusive content'}, {userName: 'paul', reason: 'copyright issue'}]

// console.log(blockList)


// // for(let i=0;i<blockList.length;i++)
// // {
// //     console.log(blockList[i].reason)
// // }

// blockList.forEach((blocked) => {
//     // console.log(blocked.userName)
//     // console.log(blocked.reason)

//     console.log(`User ${blocked.userName} is blocked due to ${blocked.reason}`)
// })


// Math Object built in object in js

// console.log(Math)

// let number = 7.6

// console.log(Math.round(number)) //round accordingly, if greater than 5 then upper, if lower than 5 then lower
// console.log(Math.floor(number)) //lower number
// console.log(Math.ceil(number)) //upper number

// console.log(Math.trunc(number)) // IT JUST REMOVES DECIMAL PART. NOT ROUNING TO UPPER OR LOWER VALUE

// let random = Math.random();
// console.log(Math.round(random*5))

// console.log(Math.floor(random*6))


// call and apply method
// we can manually set the value of "this" keyword using call and apply

let mainPlane = {
    airline: "Fly India",
    iatacode: "FI",
    bookings: [],
    book: function(flightNum, name){
        console.log(`${name} Booked Flight on ${this.airline} with flight Number ${this.iatacode}${flightNum}`)
        this.bookings.push({flightName:`${this.airline}`, name:name, flightNum: `${this.iatacode}${flightNum}`})
    }
}

// mainPlane.book('5G3D33', 'akki');
// mainPlane.book(43232, 'vivek');

// console.log(mainPlane)


// New airline launched of same group

let childPlain = {
    airline: "Child Plain",
    iatacode: "CP",
    bookings: [],
}

let book = mainPlane.book;

// // book(665, "akki") //book is regular function
// // "this" value is "undefined" at least in strict mode

// // Solution using "call" method

book.call(childPlain, 548, "akki")
// console.log(childPlain)


// book.call(mainPlane, 45355432, 'akki nai')


// apply method

book.apply(childPlain, [43243, 'akki'])

// there is slight difference betn call and apply.
// in call we pass the object in first arg, then remaining args from 2nd args.
// while in apply method first we pass the object whose reference need to be taken. then we pass in array and pass remaining args



// bind method

// function greet(){
//     console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost`)
// }
// // function greet2(){
// //     console.log(`Welcome ${firstName} ${lastName} on coder dost`)
// // }

// let user = {
//     firstName: 'akki',
//     lastName: 'nai'
// }
// let user2 = {
//     firstName: 'vivek',
//     lastName: 'nai'
// }

// let greets = greet.bind(user)
// // let greets2 = greet2.bind(user2)

// greets()
// // greets2()



// "objects/arrays" how "reference" are passed to variable

// let arr = [1,2,3,4,5]

// let getRef = arr

// getRef[6] = 7
// getRef.shift()

// console.log("original array: " , arr) // this variable is also chagned 
// console.log("getRef array: " , getRef)

// // pass by value 

// let getValue = [...arr]
// getValue.shift()
// console.log("original array: " , arr)
// console.log("getValue array: " , getValue)


// array and object are pass by reference if you use them using assignment operator
// if you want to make copy of object then you have to pass by value which can be done by rest or spread operator



// for-in loop (each iteration retuns a "key" of object)

// for-in loop is used over objects

let car = {
    model: 2022,
    color: "black",
    company: 'toyota'
}

let car2 = {...car}


// properties of an objects are known as enumerable properties

console.log(car)
console.log("car2: " ,car2)

// syntax
// for(propertyName in Object){

// }

let x = ''

for(let key in car){
    console.log(car[key])
    x = x + car[key]
}

console.log(x)