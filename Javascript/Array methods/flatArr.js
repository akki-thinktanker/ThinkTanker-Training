const arr = [1,2,[3,4,5,[6,7,8,[9,5]]]]

// doesn't change original array
// you have to provide depth in flat function
const newFlattedArr = arr.flat(Infinity)

console.log(arr)
console.log(newFlattedArr)