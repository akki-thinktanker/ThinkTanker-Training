let arr = [12, 4.7, 9, 10, 12];

// console.log("The length of the array: " + arr.length);

// using for of and for in
// let size = 0;
////////////////////////////////////////////////////////
// // using for in
// for (let elem in arr) {
//   // here elem is key of arr, and array keys are 0 to n
//   console.log(elem);
//   size++;
// }

// console.log(size);

//////////////////////////////////////////////////////////////
// using for of
// let size = 0;

// for (let elem of arr) {
//   // console.log(elem) // here it actually prints value cause for of loop is used over iteratables
//   size++;
// }

// console.log(size);

//////////////////////////////////////////////////
// Using reduce() function

const size = arr.reduce(acc => acc + 1, 0)

console.log(size) // much much easy