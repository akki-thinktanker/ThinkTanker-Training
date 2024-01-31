// concat won't modify original array

const a = [1,2,3]
const b = [4,5,6]


const c = a.concat(b)

// to get a shallow copy of a array

const shallCopy = a.concat()

console.log(c)

console.log(a,b,c)
console.log(shallCopy);

c.push(7)
console.log(c)
console.log(a)

// concat as push method, but not modifying original array

const d = a.concat(1,2)
console.log(d)
console.log(a)