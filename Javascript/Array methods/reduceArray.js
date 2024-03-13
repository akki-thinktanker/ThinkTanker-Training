const num = [1, 2, 3, 4, 5, 6];

// reduce takes an array and compress it to single value

// const total = num.reduce((acc, item, idx, arr)=>{
//     return acc + item;
// }, 0)

// console.log(total)

// //////////////////////

// finding max from array

// const max = num.reduce((acc, val) => {
//   if (acc > val) {
//     return acc;
//   } else {
//     return val;
//   }
// }, -Infinity);

// console.log(max)

// Array of Object reduce

const store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "cpu",
    value: 1500,
    count: 8,
  },
  {
    product: "phone",
    value: 400,
    count: 6,
  },
  {
    product: "monitor",
    value: 200,
    count: 3,
  },
  {
    product: "iphone",
    value: 800,
    count: 4,
  },
];

const totalValueStore = store.reduce((acc, item, idx, arr) => {
  return acc + item.value * item.count;
}, 0);


console.log(totalValueStore)