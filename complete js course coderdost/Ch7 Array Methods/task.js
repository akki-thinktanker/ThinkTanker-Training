var city_array = [
  {
    id: "1",
    name: "Mumbai",
    state: "Maharashtra",
  },
  {
    id: "2",
    name: "Delhi",
    state: "Delhi",
  },
  {
    id: "3",
    name: "Bengaluru",
    state: "Karnataka",
  },
  {
    id: "4",
    name: "Ahmedabad",
    state: "Gujarat",
  },
  {
    id: "5",
    name: "Hyderabad",
    state: "Telangana",
  },
  {
    id: "6",
    name: "Chennai",
    state: "Tamil Nadu",
  },
  {
    id: "7",
    name: "Kolkata",
    state: "West Bengal",
  },
  {
    id: "8",
    name: "Pune",
    state: "Maharashtra",
  },
  {
    id: "9",
    name: "Jaipur",
    state: "Rajasthan",
  },
  {
    id: "10",
    name: "Surat",
    state: "Gujarat",
  },
  {
    id: "11",
    name: "Lucknow",
    state: "Uttar Pradesh",
  },
  {
    id: "12",
    name: "Kanpur",
    state: "Uttar Pradesh",
  },
  {
    id: "13",
    name: "Nagpur",
    state: "Maharashtra",
  },
  {
    id: "14",
    name: "Patna",
    state: "Bihar",
  },
  {
    id: "15",
    name: "Indore",
    state: "Madhya Pradesh",
  },
  {
    id: "16",
    name: "Thane",
    state: "Maharashtra",
  },
  {
    id: "17",
    name: "Bhopal",
    state: "Madhya Pradesh",
  },
  {
    id: "18",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
  },
  {
    id: "19",
    name: "Vadodara",
    state: "Gujarat",
  },
  {
    id: "20",
    name: "Firozabad",
    state: "Uttar Pradesh",
  },
  {
    id: "21",
    name: "Ludhiana",
    state: "Punjab",
  },
  {
    id: "22",
    name: "Rajkot",
    state: "Gujarat",
  },
  {
    id: "23",
    name: "Agra",
    state: "Uttar Pradesh",
  },
  {
    id: "24",
    name: "Siliguri",
    state: "West Bengal",
  },
  {
    id: "25",
    name: "Nashik",
    state: "Maharashtra",
  },
  {
    id: "26",
    name: "Faridabad",
    state: "Haryana",
  },
  {
    id: "27",
    name: "Patiala",
    state: "Punjab",
  },
  {
    id: "28",
    name: "Meerut",
    state: "Uttar Pradesh",
  },
  {
    id: "29",
    name: "Kalyan-Dombivali",
    state: "Maharashtra",
  },
  {
    id: "30",
    name: "Vasai-Virar",
    state: "Maharashtra",
  },
];

// var state_array = {};
// city_array.forEach((index) => {
//   let state = index.state;
//   if (!(state in state_array)) {
//     state_array[state] = [];
//   }
//   state_array[state].push(index.name);
// });
// console.log(state_array);

let result = [];

city_array.forEach((obj, i) => {
  console.log(obj, i, ":obj");
  if (!result[obj.state]) {
    result[obj?.state][i]  obj?.name;
    console.log(obj?.state);
  } else {
    // result[obj.state].push(obj.name);
    result[obj.state][i] += obj.name;
  }
});

console.log(result, ":result");

// let result = {}

// city_array.forEach((obj) => {
//   // console.log(!result[obj.state])
//   if (!result[obj.state]) {
//       result[obj.state] = [obj.name];
//   } else {
//       result[obj.state].push(obj.name);
//   }
// });

// console.log(result)

// const newCity = city_array.forEach(obj => {
//   console.log(obj)
//   return `${obj[obj.state]} : ${obj[obj.name]}`
// });

// console.log(newCity)

// Desired output

// {
//     Maharashtra: [
//       'Mumbai',
//       'Pune',
//       'Nagpur',
//       'Thane',
//       'Nashik',
//       'Kalyan-Dombivali',
//       'Vasai-Virar'
//     ],
//     Delhi: [ 'Delhi' ],
//     Karnataka: [ 'Bengaluru' ],
//     Gujarat: [ 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot' ],
//     Telangana: [ 'Hyderabad' ],
//     'Tamil Nadu': [ 'Chennai' ],
//     'West Bengal': [ 'Kolkata', 'Siliguri' ],
//     Rajasthan: [ 'Jaipur' ],
//     'Uttar Pradesh': [ 'Lucknow', 'Kanpur', 'Firozabad', 'Agra', 'Meerut' ],
//     Bihar: [ 'Patna' ],
//     'Madhya Pradesh': [ 'Indore', 'Bhopal' ],
//     'Andhra Pradesh': [ 'Visakhapatnam' ],
//     Punjab: [ 'Ludhiana', 'Patiala' ],
//     Haryana: [ 'Faridabad' ]
//   }

// Mehnat I did:

// for(let i = 0;i<city_array.length; i++){
//   for(const [key,val] of Object.entries(city_array[i])){

//   }
// }

// let cityArrStr = JSON.stringify(city_array)

// // console.log(cityArrStr)

// let temp = JSON.parse(cityArrStr)

// // console.log(temp)

// // console.log(JSON.stringify(city_array))

// let states = city_array.map((state) => {
//   return state.state;
// })

// // console.log(states)

// let cities = city_array.map((city) => {
//   return city.name;
// })
// // console.log(cities)

// let obj = {id: 1}

// for(let i = 0;i<city_array;i++)
// {
//   obj[states[i]] = cities[i];
//   // console.log( `${states[i]} : ${cities[i]}`)
// }

// console.log(obj)

// console.log(states)
// console.log(cities)
