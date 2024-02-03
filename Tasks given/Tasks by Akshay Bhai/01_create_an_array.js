// using Array constructor

// let arr = new Array(5)
// console.log(arr.length)
// console.log(arr)

///////////////////////////////////////////

// using apply and map method, this will give undefined values at the place of values
// let arr = Array.apply(null, Array(5)).map(function() {})

// console.log(arr.length)
// console.log(arr)

// filling the values
// let arr = Array.apply(null, Array(5)).map(function (y,i) {return i;});

// console.log(arr.length)
// console.log(arr)


/////////////////////////////////////////////////

// Array.from() method 

// better than using that apply method and running over map method
// let arr = Array.from(Array(5))
// console.log(arr.length)
// console.log(arr)

// // eg
// let str = 'akki nai'
// let strArr = Array.from(str)

// console.log(strArr.length)
// console.log(strArr)

//////////////////////////////////////////


// let arr = Array.from('A'.repeat(5))
// console.log(arr)

////////////////////////////////////////////

// let arr = Array.from({length: 5}, (x,i) => i)

// console.log(arr)

// //////////////////////////////////////////////////////////////////

// using for loop 

// const size = 5
// const arr = []

// for(let i=0;i<size;i++)
// {
//     arr.push(i)
// }

// console.log(arr)