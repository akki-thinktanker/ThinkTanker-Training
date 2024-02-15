// Using Temporary Variable

let arr = [10, 20, 30, 40, 50];

// let t = arr[0];
// arr[0] = arr[arr.length - 1]
// arr[arr.length - 1] = t;

// console.log(arr)

/////////////////////////////////////////////

// Approach 2: Array Destructuring

// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

// console.log(arr)

/////////////////////////////////////////////

// Using XOR Bitwise Operator

// arr[0] = arr[0] ^ arr[arr.length - 1];
// arr[arr.length - 1] = arr[0] ^ arr[arr.length - 1];
// arr[0] = arr[0] ^ arr[arr.length - 1];

// console.log(arr);

// ////////////////////////////////////////

// Using splice() Method
console.log(arr.splice(arr.length - 1, 1, arr[0]));
arr[0] = arr.splice(arr.length - 1, 1, arr[0])[0];
console.log(arr);
