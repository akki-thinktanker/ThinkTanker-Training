// adds one or more element at the beginning of array
// also modifies array
const num = [1,2,3,4,5,6,6]

num.unshift(0)

console.log(num)

const res = num.unshift(-1)

console.log(res) // returns total length after adding element at beginning