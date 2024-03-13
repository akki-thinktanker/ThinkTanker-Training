// Modern js modules and tooling

// Exporting and importing es6 modules

// importing module without value

// import {order, laptopPrice, quant} from './Products.js'

// import * as singleVariable from './Products.js'

// console.log("Importing modules before this line")

// order("Jack", "laptop")

// console.log("Laptop price:", laptopPrice)
// console.log("Laptop quantity:", quant )

// console.log(singleVariable)

// ***************************************

// default export import can be given to anyname variable

// import order from  './Products.js'

// order("John", "Bike")

// ***********************************

// Top level await ES2022

// Before Es2022 we can use await only inside async function

// But in es2022 introduced top level await

// it means now we can use await outside the async function

// starting
// console.log("start using top level await")

// let getTodos = async () => { // now there is no blocking
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();

//     console.log(data)
// }
// getTodos()

// console.log("finish .......")

// top level await block the execution of next code part

// Module pattern

// IIFE

// let resultIIFE = (function () {
//   let orders = [];
//   let addToCard = function (product, quantity) {
//     console.log(`${product} ordered ${quantity}`);
//     orders.push({ product, quantity });
//   };

//   return {
//     orders, addToCard
//   }
// })();


// resultIIFE.addToCard("Bike", 1)
// resultIIFE.addToCard("GLoves", 5)

// console.log( resultIIFE.orders)



// Closures

// closures means "inner" function has an access to the variable 
// and parameter of "outer" function even after outer function 
// has returned


let outerFunction = function(outerParameter){
    let outerVar = 'outer value'

    let innerFun = function(){
        console.log(outerVar, outerParameter)
    }

    return innerFun;
}



let innerFunction = outerFunction("value of outer parameter");
console.log(innerFunction); 
innerFunction()

// closure does not make separate copy of outer variable
// it just references them

let counter = function(){
    let count = 0;
    
    let innerCounter = function(){
        return count = count + 1;
    }

    return innerCounter;
}

let innerCount = counter()


console.log(innerCount())
console.log(innerCount())
console.log(innerCount())
console.log(innerCount())