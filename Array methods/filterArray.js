// const num = [1,2,3,4,5,6,8,6]

// // filter returns a true array and doesn't modify the original array

// const even = num.filter(item => item % 2 == 0)

// console.log(even)

const people = [
  {
    name: "akki",
    age: 20,
  },
  {
    name: "vivi",
    age: 16,
  },
  {
    name: "akshy",
    age: 25,
  },
];


const adult = people.filter((person) => {
    return person.age > 18
})

console.log(adult)


// removing duplicate from array

const num = [1,2,3,4,5,6,8,6,3,4,5,6]

const nums = num.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})

console.log(nums)