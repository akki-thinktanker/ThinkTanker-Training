// 1.reverse this string

//

// const str = "sihT si na !elpmaxe";
// const revStr = str.split('').reverse().join('').split(' ').reverse().join(' ');
// console.log(revStr);

///////////////////////////////////////////////

// 2.  group by managerid wise data return

//

const employees = [
  { employeeId: 11, name: "John", managerId: 11 },
  { employeeId: 50, name: "Todd", managerId: 73 },
  { employeeId: 50, name: "Todd", managerId: 73 },
  { employeeId: 73, name: "Sara", managerId: 11 },
  { employeeId: 150, name: "Alex", managerId: 200 },
  { employeeId: 73, name: "Sara", managerId: 11 },
  { employeeId: 200, name: "Alex", managerId: 50 },
  { employeeId: 100, name: "Alex", managerId: 150 },
  { employeeId: 111, name: "Akash", managerId: 111 },
];

const res = {};

employees.forEach((item) => {
  if (!res[item.managerId]) {
    res[item.managerId] = [item];

    //
    //

    // const eid = item.employeeId;
    // const mid = item.managerId;

    // if (eid == mid) {
    //     //   console.log(item);
    //     res[item.managerId] = [item];
    //     delete item.employeeId;
    // } else {
    //   res[item.managerId] = [item];
    // }

    // 
    // 
  } else {
    res[item.managerId].push(item);
  }
});

console.log(res);

//
//

// const eid = item.employeeId;
// const mid = item.managerId;

// if (eid == mid) {
//     delete item.managerId;
// //   console.log(item);
//   res[item.managerId] = [item];
// } else {
//   res[item.managerId] = [item];
// }

//
//
//

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//1. Use filter() to find common elements between the arrays
// Get the count of common elements

//

// let a = [34, 35, 36, 38];
// let b = [35, 36, 37, 38];

// const mergedArr = [...a, ...b];
// let count = 1;
// const commonEl = mergedArr.filter((el, idx, arr) => {
//   {
//     return arr.indexOf(el) === idx;
//   }
// });

// console.log("Common elements: ", commonEl);
// console.log("Total Common elements: ",commonEl.length);

//////////////////////////////////////////////////////

// 2. remove all inner array and value store in only one array

//

// const arr = [
//   [1, 2, 3, 4, 5],
//   [4, 5, 6],
//   [7, 8],
// ];

// const flatArr = arr.flat(Infinity)
// console.log(flatArr)

///////////////////////////////////////////////

// 3.find all unique value

//

// const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5]

// const uniqueVal = [...new Set(arr)]
// console.log(uniqueVal)

////////////////////////////////////////////////

// 4. o/p :- Subham

//

// const myName =['S','u','b','h','a','m'];
// const str = myName.join('')

// console.log(str)

//////////////////////////////////////////////

// 5.  o/p :- ['S','u','b','h','a','m'];

//

// const myName = 'Subham';
// const arr = myName.split('')

// console.log(arr)

// 6. i want sorting top rated books wise array title

// const books = [
//   { title: "Book A", author: "Author X", rating: 4.7 },
//   { title: "Book B", author: "Author Y", rating: 4.9 },
//   { title: "Book C", author: "Author Z", rating: 4.5 },
//   { title: "Book D", author: "Author W", rating: 4.9 },
//   { title: "Book E", author: "Author V", rating: 4.6 },
// ];

// books.sort((a,b) => b.rating - a.rating)
// // console.log(books)

// const sortedBooks = {}

// books.forEach((book) => {
//     if(!sortedBooks[book.title])
//     {
//         sortedBooks[book.title] = [book.rating]
//     }
// })

// console.log(sortedBooks)
