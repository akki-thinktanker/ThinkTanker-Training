// Using includes() method
const arr = [21, 12, 13, 45, 54];

// if (arr.includes(12)) {
//     console.log(arr.includes(0)) // returns true or false
//     console.log("12 is present in the array.");
// } else {
//     console.log("12 is not present in the array.");
// }

/////////////////////////////////////

// Using the indexOf() method
// if (arr.indexOf(55) >= 0) {
//   console.log("value present");
// } else {
//   console.log("Value not present");
// }

////////////////////////////////////////

// Using the find() method
// const res = arr.find((elem) => elem == 13);

// // Check the result and log a message
// if (res !== undefined) {
//     console.log("13 is present in the array.");
// } else {
//     console.log("13 is not present in the array.");
// }
// console.log(res)

////////////////////////////////////////////

// using for loop

// let p = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 11) {
//     p = true;
//     break;
//   }
// }

// if (p) {
//   console.log("element present");
// } else {
//   console.log("Element not present");
// }

////////////////////////////////////////

// Using the Array.some() method

const res = arr.some((elem) => elem == 13);

console.log(res);

if (res) {
  console.log("value present");
} else {
  console.log("Value not present");
}
