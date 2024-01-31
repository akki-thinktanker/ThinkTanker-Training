// slice method returns a shallow copy of a portion of an array
// won't modify original array


const num = [1, 2, 3, 4, 5, 6, 7];

const firstThree = num.slice(0,3)

console.log(firstThree)


// if we don't provide anything, we get a shallow copy of array 

const num2 = num.slice()
console.log(num2)

// can also provide negative number

const n3 = num.slice(-3)
console.log(n3)

// all values after the providing index
const n4 = num.slice(2)
console.log(n4)

// this method doesn't change original array, we can use inside function