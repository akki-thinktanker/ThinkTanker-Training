// array methods

// simple methods

let letters = ["a", "b", "c", "d", "e"];

// reverse() - It will mutate / change original array

// it changes original array so make sure to make copy of original array
// console.log(letters.reverse())

// concat() - non mutating, won't change original array

// let nums = [1,2,3,4,5]

// let concated = nums.concat(letters)

// console.log(concated)
// console.log([...nums, ...letters])

// join() - non mutating, won't change original array
// you have to give separator in join, default separator is ','

let joined = letters.join("-");

// console.log(joined)
// console.log(typeof joined) // join will convert your array to string, so make a note of that

// Slice method

// used to extract part the array
// array.slice(startIndex, lastIndex(excluded))
// return new array of extracted elements

let num = [3, 5, 6, 8, 2];

// starting from 1st to 3rd as 4th is not included
// slice will return an array
let extractedArr = num.slice(1, 4);
let extractedTillEnd = num.slice(1); // 1 to till end
// console.log(extractedArr)
// console.log(typeof extractedArr)

// splice method - mutating method, original array modify

// splice(index, deleteElement, Addelement)

// used to add new element/s into the array
// array.splice(index, deleteValue, valudToBeAdded)
// return deleted items in the form of array

// let newNum = num.splice(1,2,10)
let newNum = num.splice(1, 0, 10);

// console.log(newNum)
// console.log(num)

// at methodd - for accessing element at a particular array location

let nums = [23, 54, 33, 85];

// console.log(nums[0])
// console.log(nums.at(2))

// // getting last element of the array

// console.log(nums[nums.length - 1])
// console.log(nums.at(-3))
// console.log(nums.slice(-3)[0]) // slice return array

// at works with strings too

let name = "akkiOP";

// console.log(name.at(-3))

// Higher order function

// map method

// create new array from original array by applying transformation function

let salaries = [3000, 5000, 8000, 12000, 15000, 200000];

let newSalaries = salaries.map((salary) => {
  let incrementedAmount = salary / 2;

  return salary + incrementedAmount;
});

// console.log("After 50% increment",newSalaries)

// length of new array always equal to original array

// filter method  - used to perform filtration on array

let gifts = ["watch", "ring", "chocolate", "teddy", "watch"];

let filteredArray = gifts.filter((gift) => {
  if (gift == "watch" || gift == "ring") {
    return gift;
  }
});

// it return new array, original array not altered
// console.log(gifts)
// console.log(filteredArray)

// NOTE:
// Length of new array may or may not be equal to original array in filter() method

// reduce method

// run reducer function for each array element
// array.reduce(function(total, currentValue), InitialValue
// it return single value)

// sum of all elements using reduce method

let sum = nums.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
// 0 is given to total as initial value
// current value is value of array element

// console.log(sum)

// doesn't mutate original array

// find method
// it return the first element we are looking for ...

// higher order methods

let students = [
  { id: 1, name: "akki" },
  { id: 2, name: "vivek" },
  { id: 1, name: "shubham" },
];

let result = students.find((student) => {
  return student.id === 1;
});

// if nothing found then it will return undefined
// also it returns first element it finds

// console.log(result)

// findIndex method

// execute function for each array element
// it return "index" of that array element who first pass the test "otherwise" -1

let ages = [21, 18, 16, 22, 25];

let resultAge = ages.findIndex((age) => {
  return age > 23;
});

// console.log(resultAge)

// some and every method

// some method return "true" if "any" array element pass the test

// every method returns "true" if "all" elements pass the test

let scores = [25, 34, 45, 66, 61, 70];

let resultScore = scores.some((score) => {
  return score > 40;
});

// if one of score goes above 40 then it will return true else false

// console.log(resultScore)

let resultScoreEvery = scores.every((score) => {
  return score > 20;
});

// console.log(resultScoreEvery)

// every element need to satisfy the condition

// flat method

// it creates a new array with the elements of the subarrays concatenated into it

let arr = [1, 2, 3, 4, [5, 6, 7]];

// console.log("Before flat",arr)

let resultFlat = arr.flat(1); // by default value 1, we can change to check deep nested arrayas
// console.log("After flat",resultFlat)

let arr1 = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]];
// console.log(arr1);

let resultFlat1 = arr1.flat(2);
// console.log(resultFlat1);

// flat is non mutating method

// flatMap method

// it is the combination of the map() methodd
// followed by the flat() method of depth 1

let cart = [
  {
    name: "Mobile Phone",
    qty: 2,
    price: 500,
  },
  {
    name: "Tablet",
    qty: 2,
    price: 1000,
  },
  {
    name: "I Phone",
    qty: 2,
    price: 50000,
  },
];

let newCart = cart.flatMap((item) => {
  if (item.name === "Mobile Phone" || item.name === "I Phone") {
    return [
      item,
      {
        name: "screen protector",
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});
// console.log(newCart)

// // using map
// let newCart = cart.map(item => {
//     if(item.name === 'Mobile Phone' || item.name === 'I Phone'){
//         return [item, {
//             name: "screen protector",
//             qty: 1,
//             price: 0
//         }]
//     }else{
//         return [item]
//     }
// })
// console.log(newCart.flat())

// sorting array using sort method

// by default sort method is used to sort strings
// it firstly convert everything into string and then...

letters = ["d", "e", "g", "q", "a", "z"];

// console.log(letters.sort()) // ascending
// console.log(letters.sort().reverse()) // decending

nums = [2, 5, 7, -1, -22, -45];

// console.log("unsorted array: ", nums)

// console.log(nums.sort()) // it is sorting it based on string

// if a-b < 0 => a < b => A, B (Kepp order same)

// if a-b > 0 => a > b => B, A (Switch the order)

// nums.sort((a,b) => {
//     if(a<b)
//         return -1 // any num less than 0

//     if(a>b)
//         return 1 // any num greater than 0

// })

// ascending order
let asc = nums.sort((a, b) => {
  return a - b;
});

// descending order
let desc = nums.sort((a, b) => {
  return b - a;
});

// console.log("asc", asc)
// console.log("desc", desc)

// console.log("sorted", nums)

// chain of methods

num = [1, 2, 3, 4, 5, 6, 7, 8];

result = num.slice(0,3).splice(2,1,7).push(8,98)
// push method return new length of the array

console.log(num)
console.log(result)

// console.log(num.slice(0,3).splice(2,1,7))