// 1. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

// let num = 15;

// diff = Math.abs(num - 19);
// console.log(diff);

// if (num > 19) {
//   diff3 = diff * 3;
//   console.log(diff3);
// }

//////////////////////////////////////////

// 2. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

// const n1 = 2;
// const n2 = 25;

// if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
//   console.log(true);
// } else {
//   console.log(false);
// }

///////////////////////////////////////

// 3. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

// const n1 = 12;
// const n2 = -12;

// if ((n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0)) {
//   console.log(true);
// } else console.log(false);

////////////////////////////////////////////////

// 4. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

// const str = 'akki'
// const lowerStr = str.toLowerCase()
// const firstTwoChar = lowerStr.slice(0,2);
// if(firstTwoChar == 'py'){
//     console.log(str)
// }
// else{
//     const PyStr = 'Py'+ str;
//     console.log(PyStr)
// }


// 5. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

const str = 'tirth'

const firstChar = str[0]

const newStr = firstChar + str + firstChar

console.log(newStr)