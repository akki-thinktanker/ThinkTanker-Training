// // control flow 

// // for loop

// // for(let i=0;i<10;i++)
// // {
// //     console.log(i)
// // }


// // for loop usecase

// const dishes = ['paneer', 'noodle', 'potato twister', 'punjabi', 'gulabjamboo']

// // for(let i=0;i<dishes.length;i++)
// // {
// //     console.log(dishes[i])
// // }


// // iteration and value of i
// // 0, 1, 2, 3 and so on


// // // while loop
// // let i = 0
// // while(i < 10)
// // {
// //     console.log(i)
// //     i++
// // }


// // let i = 0
// // while(i<dishes.length)
// // {
// //     console.log(dishes[i])
// //     i++
// // }



// // do while loop

// // let i=1;
// // do{
// //     console.log(i)
// //     i++
// // }while(i<1)



// // if, else, else if statements

// // let budget = 3500

// // if(budget > 6000)
// // {
// //     console.log("will do dinner in hotel")
// // }
// // else if(budget > 4000)
// // {
// //     console.log("will do dinner in 4 star hotel")
// // }
// // else if(budget > 3000)
// // {
// //     console.log("will do dinner in 2 star hotel")
// // }
// // else{
// //     console.log("cook food at home")
// // }

// // console.log("Outta conditional block")


// // nested if

// // let num = 25

// // if(num > 20)
// // {
// //     console.log("Number greater than 20")
// //     if(num >= 23)
// //     {
// //         console.log("Number greater than 25")

// //     }else{
// //         console.log("Number less than 25")
// //     }
// // }



// // Break and continue statement

// // also called jump statement


// // continue will skip the remaining steps 
// // for(let i = 0;i<10;i++)
// // {
// //     if(i==5)
// //     {
// //         continue
// //     }
// //     console.log(i)
// // }

// // break will terminate the execution of the loop
// // for(let i=0;i<10;i++)
// // {
// //     if(i==5)
// //     {
// //         break
// //     }

// //     console.log(i)
// // }

// // console.log("Outta loop")



// // Logical Operator

// // And &&, Or ||, Not !

// /**
//  * && will require all values to be true to return true
//  * || will require only one value to be true to return true
//  * / ! will change the output of given boolean, if it returns false then it will change to true and vice versa
//  */
// // const password = 'akki@ff'

// // if(password.length > 5 && password.includes('@'))
// // {
// //     console.log("password strong")
// // }
// // else{
// //     console.log("change pass")
// // }

// // let status = false

// // if(!status)
// // {
// //     console.log("status: " , status)
// // }


// // // priorities
// // // Not
// // // And, Or from left to right


// // // examples 

// // let result = true && true || false && !false

// // console.log(result)



// // variables and block scope

// // scope -> area where variable is defined or accessible

// // let score = 90

// // {
// //     score = 15
// //     const score2 = 32 // this is also blocked scope
// //     let score1 = 255 // this is blocked scope
// //     console.log(score)
// // }

// // console.log(score) // the value of score is changed in some blocked scope but still it's accesible cause it is declared in global scope
// // console.log(score1) // as score1 is block scoped it can't be accessed in global scope
// // console.log(score2) // as score2 is block scoped it can't be accessed in global scope



// // // ternary operator
// // let age = 22
// // let weight = 54

// // let result = age > 18 ? weight > 55 ? "Qualified" : "WeightIssue" : "Sorry!";

// // console.log(result)


// // switch case

// let age = 33

// switch(age)
// {
//     case 15:
//         console.log("15")
//         break
    
//     case 16: 
//         console.log("16")
//         break

//     default:
//         console.log("Enter either 15 or 16")
// }

// const a = [1,2,3,4,5]

// for(let i=0;i<a.length;i++)
// {
//     if(a[i] === 4) continue;
//     console.log(a[i])
// }

const a = [1,2,3,4,5]

// const [a1,b, ...c] = a

console.log(...a)



// const doSum = function (a, b){
//     return a;
//     console.log(a + b);
// }

// console.log(doSum(5))

