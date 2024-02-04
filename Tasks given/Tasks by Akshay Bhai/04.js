// // Example1: Creating a zero-filled array of length 10
// let filledArray = Array(10).fill(0);

// // printing array
// console.log(filledArray);

/////////////////////////////////

// Example 2: Creating a zero-filled array of size 3×3 (2D array), here we will also use map and arrow function as well.


// Creating 2d array filled with zero values 
const arr2D = new Array(3).fill().map((item,idx) => new Array(3).fill(idx))

// print output
console.log(arr2D)