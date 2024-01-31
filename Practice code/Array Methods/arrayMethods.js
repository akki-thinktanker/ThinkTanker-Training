let list = [1, 5, 2, 3, 6, 10, 22, 5];

// map

// list.map((el) => {
//     console.log(el)
// })

// filter

// let res = list.filter((el) => {
//     return el < 10;
// })

// console.log(res)

// reduce

// let res = list.reduce((total, current) => {
//     return total + current;
// }, 0)

// console.log(res)

// reduceRight

// let res = list.reduceRight((total, current) => {
//     return total + current;
// }, 0)

// console.log(res)

// fill

// let res = list.fill(0, 0, 5)

// console.log(res)

// find

// let res = list.find((el) => {
//     return el > 5;
// })

// console.log(res)

// indexOf

// let res = list.indexOf(6)
// console.log(res)

// lastIndexOf

// let res = list.lastIndexOf(5)

// console.log(res)

// findIndex

// let res = list.findIndex((el) => {
//     return el > 5;
// })

// console.log(res)

// includes - returns true and false depending element found

// let res = list.includes(-2)

// console.log(res)

// push - add at end of array, returns length of array
//  pop - remove from end of array, returns removed elemenet
//   shift -  remove from start of array, returns removed element
//    unshift - add at beginning of array, returns length of new array

// console.log(list.push(12))
// console.log(list.pop())
// console.log(list.unshift(12))
// console.log(list.shift())

// Splice

// 1st is from where to start
// 2nd is number of element need to  delete
// remaining is number of element to be added

// list.splice(1, 3, 2,3,4)
// console.log(list)

// slice

// let res = list.slice(2,6)
// console.log(res)

// join

// let res = list.join('-')
// console.log(res)

// reverse - modifies original array too

// let res = list.reverse()
// console.log(res)
// console.log(list)

// sort - sorts array using unicode checking

// let res = list.sort()
// console.log(res)

// for sorting properly for numbers
// let res = list.sort((a,b) => a-b)
// console.log(res)

// some

// let res = list.some((el) => el > 30)
// console.log(res)

// every

// let res = list.every((el) => {
//     return el > 10
// })

// console.log(res)

// at - return value at specified index

// let res = list.at(4)
// console.log(res)

// flat

// let list1 = [1, 2, [3, 4, [5, 6]]];
// let res = list1.flat(2) // the number defines depth of nested array need to be flatted

// console.log(res)

a()
a = "this is test";
console.log(a);


var a = function () {
    console.log('test')
}