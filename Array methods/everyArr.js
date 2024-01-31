const num = [2, 3, -4, -2, -1, 5, 3, 6, 7, 4, 2];

// return true if all element pass specific condition

const positiveNum = (val, idx, arr) => {
  return val > 0;
};
const res = num.every(positiveNum);

console.log(num);
console.log(res);

// check if array of Objects have certain properties

const persons = [
  {
    name: "Akki",
  },
  {
    name: "Vivek",
  },
  {
    name: "Raj",
  },
  {
    name: "Parth",
  },
  {
    surname: "Nai",
  },
];

const result = persons.every((person) => person.name !== undefined);

console.log(res);

// arrays of arrrays

// check all items are arrays

const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
//   'fsaf'
];

const resu = arr.every(a => Array.isArray(a))

console.log(resu)