// Method 1: Using the Array() Constructor and fill() Method

// const length = 5;
// const value = 5;
// const filledArray = new Array(length).fill(value);
// console.log(filledArray);

////////////////////////////////////////////////

// Method 2: Using a Loop to Initialize Values

// for(let i=0;i<filledArray.length;i++)
//     console.log(filledArray[i])

///////////////////////////////////////

// Method 3: Using the map() Method
const length = 5;
console.log({ length });
// const filledArray1 = Array.from({length}).map(() => 5);

// it is must to use the keyword length for passing an object inside Array.from
const filledArray1 = Array.from({ length }).map(() => 5);

console.log(filledArray1);

const filledArray = Array.from({ length }).map(() => 5);
console.log(filledArray);
