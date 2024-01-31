const num = [1,2,3,4,5,6,7]  

// reverse will change the original array,
// it will reverse original array and doesn't return new reversed array



// const res = num.reverse()

// console.log(res)
// console.log(num)

////////////////////////

// if you don't want to change the orignal array, you have to 
// create a new shallow copy of original array and then reverse it 


// // here we first created shallow from num and then applied reverse on it
// const newArr = num.concat().reverse()
// console.log(num)
// console.log(newArr)

// for reversing characters insdie string, we can use reverse array

const str = 'coding is fun!'

const res = str.split('').reverse().join('')
// here we split the string and put it in array,
// then we  applied reverse method over that Array
// then we did join so all the character element will be concatinated andn 
// creates a string

console.log(res)