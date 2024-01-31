const names = ["akki", "vivek", "prince", "tirth", "jay"];

console.log(names.sort()); // sorts using ascii values and not numbers

// sort() is not enough for sorting numbers for that we have to use compare function

const num = [1, 3, 2, 55, 22, 67, 33, 25];

console.log(num.sort());
console.log(num.sort(compareFn));

function compareFn(a, b) {
  // < 0 ... a comes first
  // 0 ... nothing change
  // > 0 ... b comes first

  return a - b;
}

// sort method for array of objects

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

store.sort((a,b) => a.value - b.value)
console.log(store)