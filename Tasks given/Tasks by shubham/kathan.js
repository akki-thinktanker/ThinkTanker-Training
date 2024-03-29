// var city_array = [

//     {
//         "id": "1",
//         "name": "Mumbai",
//         "state": "Maharashtra"
//     },
//     {
//         "id": "2",
//         "name": "Delhi",
//         "state": "Delhi"
//     },
//     {
//         "id": "3",
//         "name": "Bengaluru",
//         "state": "Karnataka"
//     },
//     {
//         "id": "4",
//         "name": "Ahmedabad",
//         "state": "Gujarat"
//     },
//     {
//         "id": "5",
//         "name": "Hyderabad",
//         "state": "Telangana"
//     },
//     {
//         "id": "6",
//         "name": "Chennai",
//         "state": "Tamil Nadu"
//     },
//     {
//         "id": "7",
//         "name": "Kolkata",
//         "state": "West Bengal"
//     },
//     {
//         "id": "8",
//         "name": "Pune",
//         "state": "Maharashtra"
//     },
//     {
//         "id": "9",
//         "name": "Jaipur",
//         "state": "Rajasthan"
//     },
//     {
//         "id": "10",
//         "name": "Surat",
//         "state": "Gujarat"
//     },
//     {
//         "id": "11",
//         "name": "Lucknow",
//         "state": "Uttar Pradesh"
//     },
//     {
//         "id": "12",
//         "name": "Kanpur",
//         "state": "Uttar Pradesh"
//     },
//     {
//         "id": "13",
//         "name": "Nagpur",
//         "state": "Maharashtra"
//     },
//     {
//         "id": "14",
//         "name": "Patna",
//         "state": "Bihar"
//     },
//     {
//         "id": "15",
//         "name": "Indore",
//         "state": "Madhya Pradesh"
//     },
//     {
//         "id": "16",
//         "name": "Thane",
//         "state": "Maharashtra"
//     },
//     {
//         "id": "17",
//         "name": "Bhopal",
//         "state": "Madhya Pradesh"
//     },
//     {
//         "id": "18",
//         "name": "Visakhapatnam",
//         "state": "Andhra Pradesh"
//     },
//     {
//         "id": "19",
//         "name": "Vadodara",
//         "state": "Gujarat"
//     },
//     {
//         "id": "20",
//         "name": "Firozabad",
//         "state": "Uttar Pradesh"
//     },
//     {
//         "id": "21",
//         "name": "Ludhiana",
//         "state": "Punjab"
//     },
//     {
//         "id": "22",
//         "name": "Rajkot",
//         "state": "Gujarat"
//     },
//     {
//         "id": "23",
//         "name": "Agra",
//         "state": "Uttar Pradesh"
//     },
//     {
//         "id": "24",
//         "name": "Siliguri",
//         "state": "West Bengal"
//     },
//     {
//         "id": "25",
//         "name": "Nashik",
//         "state": "Maharashtra"
//     },
//     {
//         "id": "26",
//         "name": "Faridabad",
//         "state": "Haryana"
//     },
//     {
//         "id": "27",
//         "name": "Patiala",
//         "state": "Punjab"
//     },
//     {
//         "id": "28",
//         "name": "Meerut",
//         "state": "Uttar Pradesh"
//     },
//     {
//         "id": "29",
//         "name": "Kalyan-Dombivali",
//         "state": "Maharashtra"
//     },
//     {
//         "id": "30",
//         "name": "Vasai-Virar",
//         "state": "Maharashtra"
//     }
// ]

// const result = city_array.reduce((acc, item) => {
//     const { id, name, state } = item;

//     if (!acc[state]) {
//       acc[state] = {};
//     }
//     acc[state][id] = name;

//     return acc;
//   }, {});

//   console.log(result);

///////////////////////////////////////////////////////

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

const s = books.reduce((accumulator, object) => {
  if (!accumulator) {
    accumulator = object["year"];
    console.log(accumulator);
  } else {
    accumulator += object["year"];
    console.log((accumulator));
    // console.log((accumulator += object.year));
  }
  return Math.round(accumulator / books.length);
}, 0);

console.log(s);
