// Asynchronous Javascript

// making HTTP Request (example)

// callback function

// let todos = (resource) => {
//   return new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();

//     console.log(request);

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState)
//       if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.responseText);
//         resolve(data)
//         console.log(request.responseText);
//       } else if (request.readyState === 4) {
//         // console.log("Data could not be fetched")
//         reject("error in fetching")
//       }
//     });

//     // set up the request

//     //   request.open("Get", "https://jsonplaceholder.typicode.com/todos");
//     request.open("Get", "data.json");

//     // sending the request
//     request.send();
//   });
// };

// todos('data.json').then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })
// Async code ex

// console.log(1);
// console.log(2);

// // Async code
// // setTimeout(() => {
// //     console.log("callback function called after 3 seconds")
// // }, 3000) // after 3 seconds

// // Async code example
// todos((error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// // If this code block execution for 3 secondss? no
// console.log(3);
// console.log(4);
// console.log(5);

// Chain of todos function(callback) => callback hell

// todos("data.json", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
//   todos("mario.json", (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(data);
//     }
//     todos("lurie.json", (error, data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//       }
//     });
//   });
// });

// Promise General ex

// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve('some data') // Dummy
//     reject("some error");
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// use this link for practice to get JSON data in response
// https://jsonplaceholder.typicode.com/todos

/**
 * value     state               Description
 * 0        UNSENT              Client has been created. open() not called yet.
 * 1        OPENED              open() has been called.
 * 2        HEADERS_RECEIVED    send() has been called, and headers
 * 3        LOADING Downloading; responseText holds partial data.
 * 4        DONE                The operation is complete. // interested here
 *
 */

/**
 * HTTP response status code
 *
 * Informational responses (100 - 199)
 * Successful responses (200 - 299)
 * Redirection messages (300 - 399)
 * Client error response (400 - 499)
 * Server error responses (500 - 599)
 */

// fetch api

// fetch("data.json")
//   .then((response) => {
//     console.log("Promise resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//  async and await

let getTodos = async () => {
  try {
    let response = await fetch("data.json");
    let data = await response.json();

    let response2 = await fetch("mario.json");
    let marioData = await response2.json();

    console.log(data, marioData)
  } catch (error) {
    console.log(error.message);
  }
};

// we don't need to chain anything as previously with this async and await

// getTodos().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error.message)
// })

getTodos();
