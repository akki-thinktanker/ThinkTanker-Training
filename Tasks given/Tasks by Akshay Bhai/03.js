// let array = ['geeks', '4', 'geeks'];

// // Accessing array elements one by one
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

//////////////////////////////////////

// access using for loop

// let array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// //////////////////////////////////////

// using while  loop
// let idx = 0;
// let arr = [1, 2, 3, 4, 5];

// while (idx < arr.length) {
//   console.log(arr[idx]);
//   idx++;
// }

// ///////////////////////////////////////////

// using forEach

// let array = [1, 2, 3, 4, 5, 6];

// array.forEach((item) => {
//   console.log(item);
// });

// every method

// let array = [1, 2, 3, 4, 5];

// const ans = array.every((item) => {
//   if (item > 0) {
//     return item
//   }
// });

// console.log(ans)

//////////////////////////////////////
// map methodd

// let arr = [1, 2, 3, 4, 5, 6]

// let sqr = x => Math.pow(x,2)

// sqr = arr.map(sqr)

// console.log(sqr)

///////////////////////////////

// filter method

// let array = [1, 2, 3, 4, 5, 6];

// const ans = array.filter((item)=> {
//     return item > 4
// })
// console.log(ans)

///////////////////////////////////////////////

// reduce method

// let array = [1, 2, 3, 4, 5];

// const sum = array.reduce((acc, current) => acc + current)

// console.log(array)
// console.log(sum)

// /////////////////////////////////////////

// some method 

let arr = [1,2,3,4,4,5]

const lessThanFour = arr.some((item) => item < 4)

console.log(lessThanFour)