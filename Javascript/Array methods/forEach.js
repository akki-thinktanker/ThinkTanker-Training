const num = [1,2,3,4,5]

// num.forEach(consoleItem)

// // forEach method doesn't return any value

// function consoleItem(item, index, arr){
//     console.log(`a[${index}] = ${item}`)
//     console.log(`[${arr}]`)
// }


// // finding sum of all elements
// let sum = 0;
// num.forEach(item => {
//     sum += item;
// })

// console.log(sum);


/////////////////////////////


// Occurance of letters

const letters = ['a','b','a','c','d','e','b','d','a']

let count = {};

letters.forEach(item => {
    if(count[item])
    {
        count[item]++;
    }else{
        count[item] = 1;
    }
})

console.log(count);