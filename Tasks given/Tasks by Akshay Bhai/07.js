const array = [100, 200, 300, 400, 500];

// using forEach
// array.forEach((element, index) => {
//     console.log(`${element} is found at ${index}`)
// });

// using map method

// const mapArr = array.map((ele,idx) => {
//   return `${ele} found at ${idx}`
// })

// console.log(mapArr)

// find method

// const above300 = array.find(elem => elem > 300)

// console.log(above300)

// using destructuring assignment
let [hundred, twoHundred, , fourHundred, ...rest] = array

console.log(`${hundred} ${twoHundred} ${fourHundred} ${rest} `)