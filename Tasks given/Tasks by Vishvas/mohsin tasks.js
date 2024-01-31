// Find unique element in an array without using any additional libraries or array method.
// var a = [1, 1, 2, 3, 3, 4];
// // const arr = new Set(a)
// // console.log([...arr])
// console.log([...new Set(a)]);

/////////////////////////////////////////////////

// // Recursive factorial function.
// function factorial(n) {
//   if (n == 0) return 1;
//   return n * factorial(n - 1);
// }

// const factorialAns = factorial(5)
// console.log(factorialAns)

////////////////////////////////////////////////////

// console.log(2 + true), console.log(2 + "true");
// // Ans:
// // output = 3;
// // output = 2true;

//////////////////////////////////////////////////////

// // What will be the output of following program?
// var i = 10;
// function foo() {
//     console.log(i);
//     var i = 20;
// }
// foo();

// OP:
// Undefined

/////////////////////////
// console.log(x)
// var x = 10;

////////////////////////////////////////////

// What will be the output of following program?
// let i = 10;
// function foo() {
//   console.log("i is", i);
//   let i = 20;
// }
// foo();

// OP:
// ReferenceError: Cannot access 'i' before initialization

//////////////////////////////////////////////////

// sort a object using a name

emp = [
  { name: "rushik", age: 26 },
  { name: "amit", age: 24 },
  { name: "mihir", age: 23 },
  { name: "meet", age: 20 },
];

// sortedEmp = emp.sort((a,b) => a.name.localeCompare(b.name));
// console.log(sortedEmp);

// Answer
// Name sort:-
// emp.sort((a, b) => a.name.localeCompare(b.name));
// console.log(emp);

// method 2 sort:-
// emp.sort((a, b) => {
//             if(a.name < b.name) { return -1; }
//             if(a.name > b.name) { return 1; }
//             return 0;
//         })
//         console.log(emp);

//     Sort by age:-
//     emp.sort((a, b) => {
//                 return a.age - b.age;
//             })

//     get difference between two times.
//     month always starts with 0 index incase of date in number.
//     Note: while comparing time in UTC format you have to add 0 if the month is below 10 to make it two digit figure.


//     Method 1)

// const date1 = new Date('12/12/2010');
// const date2 = new Date('11/12/2010');
// var diffTime = Math.abs(date1 - date2);
// console.log(diffTime)
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays);

//     Method 2)
// var a = moment("11/15/2010", "M/D/YYYY");
// var b = moment("12/15/2010", "M/D/YYYY");
// var diffDays = b.diff(a, "days");
// console.log(diffDays);

/////////////////////////////////////////////////////////////////

// to fill (replace) the array value with assigned value
    // var a = Array(3).fill([6]);
    // var a = Array(3).fill(6);

    // console.log(a)


  //////////////////////////////////////

// Shows only the explicitly set index of "5", and ignores 0-4

    let a = [];
    a[5] = 5;
    for (var x in a) {
    console.log(x);
    }

// How to check empty object value in array?
//     Ans:

// Method 1:
// const array = [{a: null, b: 's'}, {a: '', b: ''}, {null: 'ok', b: 'ss'}];
// let foundValuesArray = array.filter((obj)=>{
// return Object.values(obj).every(v => v);
// });
// console.log(foundValuesArray);

// Method 2:
// const array = [{a: null, b: 's'}, {a: '', b: ''}, {a: 'ok', b: 'ss'}];
// array.forEach((obj)=>{
// var foundValuesArray = Object.values(obj).filter(val => val);
// if(foundValuesArray.length > 0){
// console.log(foundValuesArray);
// }
// });

// -to check both empty key and value.
// const array = [{ a: null, b: 's' }, { a: '', b: '' }, { a: 'ok', b: 'ss' }, { null: 'as', b: 's' }];
// let foundValuesArray = array.filter((obj) => {
// return Object.values(obj).every(v => v) && Object.keys(obj).every(v => v != 'null' && v != '');
// });
// console.log(foundValuesArray);

// -to check empty object keys
// const variables = {a: null, b: 's', c: ''};
// const foundKeys = Object.keys(variables).filter(
// (key) => variables[key] !== null,
// );
