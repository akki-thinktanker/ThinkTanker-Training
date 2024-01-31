// creates a new shallow copied array from 
// array like or iterable object 

const str = '123456'

// [1,2,3,4,5,6,7]

// const res = Array.from(str, mapFn)

// function mapFn(x)
// {
//     return Number(x)
// }

const res = Array.from(str, Number) // or you can just pass Number constructor


console.log(res)


///////////////////////////////

// remove all the duplicated value from an array 

const numbers = [ 1, 2, 3, 4, 5, 6 ,3,6,1,4,2,1,5,7,8,3]


//first creating a new set using array
// then converting that Set back to array using Array.from() method 

const result = Array.from(new Set(numbers))

console.log(result)

