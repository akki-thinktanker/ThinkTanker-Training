// const num = [1, 2, 3, 4, 5, 6, 7];

// const doubleNum = num.map(double);
// const multiplyByIndex = num.map(multiply);

// map function doesn't change the array,
// it will return a new array after performing operation

// function double(item, index, arr) {
//   return item * 2;
// }

// // multiply by index
// function multiply(item, index, arr) {
//   return item * index;
// }

// console.log(doubleNum);
// console.log(multiplyByIndex);

/////////////////////////

// const arrOfObj = [
//   {
//     name: "laptop",
//     price: 1000,
//     count: 3,
//   },
//   {
//     name: "desktop",
//     price: 1500,
//     count: 2,
//   },
//   {
//     name: "phone",
//     price: 500,
//     count: 10,
//   },
// ];

// const totalProductValue = arrOfObj.map((item) => {
//   return { name: item.name, totalValue: item.price * item.count };
// });

// console.log(totalProductValue);

/////////////////////////////////////////////////

const strNum = ["1", "2", "3", "4"];

const numb = strNum.map(Number);

// for converting string number to real numbers

// const numb = strNum.map((item) => Number(item));

console.log(numb)