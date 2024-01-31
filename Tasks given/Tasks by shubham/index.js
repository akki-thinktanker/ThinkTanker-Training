//   1: Filter books published after a specific year (DONE)
//   2: Sort books by publication year in ascending order (DONE)
//   3: Find the total number of books by each author
//   4: Extract unique authors
//   5: Calculate the average publication year of all books
//   6: Find the most recent book
//   7: Remove duplicates based on the author

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye - 2", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird - 2", author: "Harper Lee", year: 1960 },
  { title: "1984 - 2", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby - 2", author: "F. Scott Fitzgerald", year: 1925 },
  // Add more books as needed
];

// for(let i=0;i<uniqueAuthors.length;i++){
//     books.map((book) => {
//         if(uniqueAuthors[i] == )
//     })
// }
// console.log(uniqueAuthors);

///////////////////////////////////////////

// books.forEach((book) => {
//   if ((book['author'] == authors)) {
//     authors.push(book.author);
//   }
// });

// console.log(authors);

//   1. Filter books published after a specific year

//   const publishedAfterYear = 1930

//  const bookAfter1955 =  books.filter((book) => {
//     return book.year > publishedAfterYear;
//   })

//   console.log(bookAfter1955)

///////////////////////////////////////

// 2. Sort books by publication year in ascending order

// wrong logic

//   books.map((book,i) => {
// if(book.year === publishedYear[i]){
//     sortedBooksByPublishedYear.push(book)
// }
//   })

///////////////////////////////////////

// let publishedYear = books
//   .map((book) => {
//     return book.year;
//   })
//   .sort();

// // publishedYear = publishedYear.sort()
// console.log(publishedYear);

// let sortedBooksByPublishedYear = [];

// // correct logic

// for (let i = 0; i < publishedYear.length; i++) {
//   books.forEach((book) => {
//     if (book.year === publishedYear[i]) {
//       sortedBooksByPublishedYear.push(book);
//     }
//   });
// //   console.log(publishedYear[i]);
// }

// console.log(sortedBooksByPublishedYear);

// oneliner

// const sortedBooksByYear = books.sort((a,b) => {
//     return a.year - b.year
// })
// console.log(sortedBooksByYear)

////////////////////////////////////////////

// 3. Find the total number of books by each author

// const noOfBooks = {}; // creating blank object

// books.forEach((authorBook) => { // iterating over single object in an array
//   if (!noOfBooks[authorBook.author]) {
//     noOfBooks[authorBook.author] = 1;
//   } else {
//     noOfBooks[authorBook.author] += 1;
//   }
// });

// console.log(noOfBooks);

///////////////////////////////////

//   4: Extract unique authors
// const uniqueAuthors = new Set();
// books.map((book) => {
//   uniqueAuthors.add(book.author);
// });

/////////////////////////////////////

//   5: Calculate the average publication year of all books
const publicationYears = []
books.map((item) => {
    publicationYears.push(item.year)
})
const average = publicationYears.reduce((acc, cvalue) => {
    return acc + cvalue / publicationYears.length
}, 0)
console.log(Math.round(average))

///////////////////////////////////////

//   6: Find the most recent book

// const mostRecentBook = books.sort((a,b) => a.year - b.year);
// console.log(mostRecentBook[mostRecentBook.length - 1])

////////////////////////////////////////////
