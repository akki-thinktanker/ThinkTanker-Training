// # (1) Get all the models of "Lamborghini" company with price.
// '''
// Output :-
// [{'Name': 'Lamborghini Urus', 'Price': {1: '₹4,80,00,000', 2: '₹4,85,00,000', 3: '₹4,90,00,000'}},
// {'Name': 'Lamborghini Huracan', 'Price': {1: '₹3,21,00,000', 2: '₹3,22,00,000', 3: '₹3,23,00,000'}},
// {'Name': 'Lamborghini Revuelto', 'Price': {1: '₹10,00,00,000', 2: '₹10,10,00,000', 3: '₹10,20,00,000'}}]
// '''

// # (2) Get 2nd model of "Ducati" company with 3rd price.
// '''
// Outout :-
// {'Model_name': 'Ducati Streetfighter V4', 'Price': '₹24,15,000'}
// '''
// # (3) Get most expensive model from "Kawasaki" company with price.
// '''
// Output :-
// {'Model_name': 'Kawasaki Ninja H2', 'Price': '₹79,99,000'}
// '''

// const Garage = [
//   {
//     Cars: {
//       sports_cars: [
//         {
//           Company: "Porsche",
//           Models: [
//             {
//               1: {
//                 Name: "Porsche 911",
//                 Price: { 1: "$8,000,000", 2: "$8,200,000", 3: "$8,300,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "Porsche 718",
//                 Price: { 1: "$8,500,000", 2: "$8,600,000", 3: "$8,700,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "Porsche Macan",
//                 Price: { 1: "$9,500,000", 2: "$9,700,000", 3: "$9,900,000" },
//               },
//             },
//           ],
//         },
//         {
//           Company: "Mercedes",
//           Models: [
//             {
//               1: {
//                 Name: "Mercedes-Benz G-Class",
//                 Price: {
//                   1: "₹1,67,00,000",
//                   2: "₹1,68,00,000",
//                   3: "₹1,70,00,000",
//                 },
//               },
//             },
//             {
//               2: {
//                 Name: "Mercedes-Benz Cabriolet",
//                 Price: {
//                   1: "₹1,30,00,000",
//                   2: "₹1,40,00,000",
//                   3: "₹1,50,00,000",
//                 },
//               },
//             },
//             {
//               3: {
//                 Name: "Mercedes-Benz EQC",
//                 Price: {
//                   1: "₹1,07,00,000",
//                   2: "₹1,77,00,000",
//                   1: "₹1,90,00,000",
//                 },
//               },
//             },
//           ],
//         },
//         {
//           Company: "Lamborghini",
//           Models: [
//             {
//               1: {
//                 Name: "Lamborghini Urus",
//                 Price: {
//                   1: "₹4,80,00,000",
//                   2: "₹4,85,00,000",
//                   3: "₹4,90,00,000",
//                 },
//               },
//             },
//             {
//               2: {
//                 Name: "Lamborghini Huracan",
//                 Price: {
//                   1: "₹3,21,00,000",
//                   2: "₹3,22,00,000",
//                   3: "₹3,23,00,000",
//                 },
//               },
//             },
//             {
//               3: {
//                 Name: "Lamborghini Revuelto",
//                 Price: {
//                   1: "₹10,00,00,000",
//                   2: "₹10,10,00,000",
//                   3: "₹10,20,00,000",
//                 },
//               },
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     Bikes: {
//       sports_bikes: [
//         {
//           Company: "Kawasaki",
//           Models: [
//             {
//               1: {
//                 Name: "Kawasaki Ninja ZX-10R",
//                 Price: { 1: "₹15,99,000", 2: "₹16,99,000", 3: "₹17,99,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "Kawasaki Ninja H2",
//                 Price: { 1: "₹79,90,000", 2: "₹79,95,000", 3: "₹79,99,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "Kawasaki Ninja 1000SX",
//                 Price: { 1: "₹12,20,000", 2: "₹12,22,000", 3: "₹12,25,000" },
//               },
//             },
//           ],
//         },
//         {
//           Company: "BMW",
//           Models: [
//             {
//               1: {
//                 Name: "BMW M 1000 RR",
//                 Price: { 1: "₹42,00,000", 2: "₹43,00,000", 3: "₹45,00,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "BMW S 1000 R",
//                 Price: { 1: "₹19,00,000", 2: "₹20,00,000", 3: "₹20,50,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "BMW R 1200 R",
//                 Price: { 1: "₹15,00,000", 2: "₹15,50,000", 3: "₹16,00,000" },
//               },
//             },
//           ],
//         },
//         {
//           Company: "Ducati",
//           Models: [
//             {
//               1: {
//                 Name: "Ducati Panigale V2",
//                 Price: { 1: "₹20,27,000", 2: "₹21,30,000", 3: "₹22,00,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "Ducati Streetfighter V4",
//                 Price: { 1: "₹22,15,000", 2: "₹23,15,000", 3: "₹24,15,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "Ducati Streetfighter V2",
//                 Price: { 1: "₹18,10,000", 2: "₹19,10,000", 3: "₹20,10,000" },
//               },
//             },
//           ],
//         },
//       ],
//     },
//   },
// ];

// # (1) Get all the models of "Lamborghini" company with price.
// '''
// Output :-
// [
// {'Name': 'Lamborghini Urus', 'Price': {1: '₹4,80,00,000', 2: '₹4,85,00,000', 3: '₹4,90,00,000'}},
// {'Name': 'Lamborghini Huracan', 'Price': {1: '₹3,21,00,000', 2: '₹3,22,00,000', 3: '₹3,23,00,000'}},
// {'Name': 'Lamborghini Revuelto', 'Price': {1: '₹10,00,00,000', 2: '₹10,10,00,000', 3: '₹10,20,00,000'}}
// ]
// '''
////////////////////////////////////////////

//**************************** Improved logic ****************************/

// const cars = Garage[0].Cars.sports_cars;
// const Lamborghini = cars.find((item) => {
//   return item.Company === "Lamborghini";
// });

// const LamboModels = Lamborghini.Models;

// const res = [];

// LamboModels.forEach((item, idx) => {
//   res.push(item[idx + 1]);
// });

// console.log(res);

//**************************** Improved logic Ends****************************/

//**************************  old logic ******************************** */

// const allLamborghini = [];

// const cars = Garage[0].Cars.sports_cars;
// const Lamborghini = cars.find((item) => {
//   return item.Company === "Lamborghini";
// });
// // const LamboModels = Lamborghini
// allLamborghini.push(Lamborghini);

// const LamboModels = allLamborghini[0].Models;

// const res = [];

// LamboModels.forEach((item, idx) => {
//   res.push(item[idx + 1]);
// });

// console.log(res);

//**************************  old logic ends ******************************** */

//**************************  testing logic start ******************************** */

// console.log(
//   Garage[0].Cars.sports_cars
//     .filter((item) => {
//       return item.Company == "Lamborghini";
//     })[0]
//     .Models.forEach((item) => console.log(item))
// );

// console.log(Garage)

//**************************  testing logic ends ******************************** */

////////////////////////////////////////////////////////////////////////////////////////////

// # (2) Get 2nd model of "Ducati" company with 3rd price.
// '''
// Outout :-
// {'Model_name': 'Ducati Streetfighter V4', 'Price': '₹24,15,000'}
// '''

// const Garage = [
//   {
//     Cars: {
//       sports_cars: [
//         {
//           Company: "Porsche",
//           Models: [
//             {
//               1: {
//                 Name: "Porsche 911",
//                 Price: { 1: "$8,000,000", 2: "$8,200,000", 3: "$8,300,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "Porsche 718",
//                 Price: { 1: "$8,500,000", 2: "$8,600,000", 3: "$8,700,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "Porsche Macan",
//                 Price: { 1: "$9,500,000", 2: "$9,700,000", 3: "$9,900,000" },
//               },
//             },
//           ],
//         },
//         {
//           Company: "Mercedes",
//           Models: [
//             {
//               1: {
//                 Name: "Mercedes-Benz G-Class",
//                 Price: {
//                   1: "₹1,67,00,000",
//                   2: "₹1,68,00,000",
//                   3: "₹1,70,00,000",
//                 },
//               },
//             },
//             {
//               2: {
//                 Name: "Mercedes-Benz Cabriolet",
//                 Price: {
//                   1: "₹1,30,00,000",
//                   2: "₹1,40,00,000",
//                   3: "₹1,50,00,000",
//                 },
//               },
//             },
//             {
//               3: {
//                 Name: "Mercedes-Benz EQC",
//                 Price: {
//                   1: "₹1,07,00,000",
//                   2: "₹1,77,00,000",
//                   1: "₹1,90,00,000",
//                 },
//               },
//             },
//           ],
//         },
//         {
//           Company: "Lamborghini",
//           Models: [
//             {
//               1: {
//                 Name: "Lamborghini Urus",
//                 Price: {
//                   1: "₹4,80,00,000",
//                   2: "₹4,85,00,000",
//                   3: "₹4,90,00,000",
//                 },
//               },
//             },
//             {
//               2: {
//                 Name: "Lamborghini Huracan",
//                 Price: {
//                   1: "₹3,21,00,000",
//                   2: "₹3,22,00,000",
//                   3: "₹3,23,00,000",
//                 },
//               },
//             },
//             {
//               3: {
//                 Name: "Lamborghini Revuelto",
//                 Price: {
//                   1: "₹10,00,00,000",
//                   2: "₹10,10,00,000",
//                   3: "₹10,20,00,000",
//                 },
//               },
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     Bikes: {
//       sports_bikes: [
//         {
//           Company: "Kawasaki",
//           Models: [
//             {
//               1: {
//                 Name: "Kawasaki Ninja ZX-10R",
//                 Price: { 1: "₹15,99,000", 2: "₹16,99,000", 3: "₹17,99,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "Kawasaki Ninja H2",
//                 Price: { 1: "₹79,90,000", 2: "₹79,95,000", 3: "₹79,99,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "Kawasaki Ninja 1000SX",
//                 Price: { 1: "₹12,20,000", 2: "₹12,22,000", 3: "₹12,25,000" },
//               },
//             },
//           ],
//         },
//         {
//           Company: "BMW",
//           Models: [
//             {
//               1: {
//                 Name: "BMW M 1000 RR",
//                 Price: { 1: "₹42,00,000", 2: "₹43,00,000", 3: "₹45,00,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "BMW S 1000 R",
//                 Price: { 1: "₹19,00,000", 2: "₹20,00,000", 3: "₹20,50,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "BMW R 1200 R",
//                 Price: { 1: "₹15,00,000", 2: "₹15,50,000", 3: "₹16,00,000" },
//               },
//             },
//           ],
//         },
//         {
//           Company: "Ducati",
//           Models: [
//             {
//               1: {
//                 Name: "Ducati Panigale V2",
//                 Price: { 1: "₹20,27,000", 2: "₹21,30,000", 3: "₹22,00,000" },
//               },
//             },
//             {
//               2: {
//                 Name: "Ducati Streetfighter V4",
//                 Price: { 1: "₹22,15,000", 2: "₹23,15,000", 3: "₹24,15,000" },
//               },
//             },
//             {
//               3: {
//                 Name: "Ducati Streetfighter V2",
//                 Price: { 1: "₹18,10,000", 2: "₹19,10,000", 3: "₹20,10,000" },
//               },
//             },
//           ],
//         },
//       ],
//     },
//   },
// ];

// const Bikes = Garage[1].Bikes.sports_bikes;
// const Ducatis = Bikes.find((item) => item.Company == "Ducati").Models;

// // console.log(Ducatis[1][2])

// // const res = Ducatis.find((item, idx) => item[idx+1] == "2");

// const res = [];

// Ducatis.forEach((item, idx) => {
//   res.push(item[idx + 1]);
// });

// const secondDucati = res[1];

// secondDucati.Model_name = secondDucati.Name;
// delete secondDucati.Name;

// secondDucati["Price"] = Object.values(secondDucati.Price)[2];

// // console.log(secondDucati);

// let sorted = Object.keys(secondDucati)
//   .sort()
//   .reduce((acc, currValue) => {
//     acc[currValue] = secondDucati[currValue];
//     return acc;
//   }, {});

// console.log(sorted);

//********************************third******************* */
// # (3) Get most expensive model from "Kawasaki" company with price.
// '''
// Output :-
// {'Model_name': 'Kawasaki Ninja H2', 'Price': '₹79,99,000'}
// '''

///////////////////////////////////////////////////////////


const Garage = [
    {
      Cars: {
        sports_cars: [
          {
            Company: "Porsche",
            Models: [
              {
                1: {
                  Name: "Porsche 911",
                  Price: { 1: "$8,000,000", 2: "$8,200,000", 3: "$8,300,000" },
                },
              },
              {
                2: {
                  Name: "Porsche 718",
                  Price: { 1: "$8,500,000", 2: "$8,600,000", 3: "$8,700,000" },
                },
              },
              {
                3: {
                  Name: "Porsche Macan",
                  Price: { 1: "$9,500,000", 2: "$9,700,000", 3: "$9,900,000" },
                },
              },
            ],
          },
          {
            Company: "Mercedes",
            Models: [
              {
                1: {
                  Name: "Mercedes-Benz G-Class",
                  Price: {
                    1: "₹1,67,00,000",
                    2: "₹1,68,00,000",
                    3: "₹1,70,00,000",
                  },
                },
              },
              {
                2: {
                  Name: "Mercedes-Benz Cabriolet",
                  Price: {
                    1: "₹1,30,00,000",
                    2: "₹1,40,00,000",
                    3: "₹1,50,00,000",
                  },
                },
              },
              {
                3: {
                  Name: "Mercedes-Benz EQC",
                  Price: {
                    1: "₹1,07,00,000",
                    2: "₹1,77,00,000",
                    1: "₹1,90,00,000",
                  },
                },
              },
            ],
          },
          {
            Company: "Lamborghini",
            Models: [
              {
                1: {
                  Name: "Lamborghini Urus",
                  Price: {
                    1: "₹4,80,00,000",
                    2: "₹4,85,00,000",
                    3: "₹4,90,00,000",
                  },
                },
              },
              {
                2: {
                  Name: "Lamborghini Huracan",
                  Price: {
                    1: "₹3,21,00,000",
                    2: "₹3,22,00,000",
                    3: "₹3,23,00,000",
                  },
                },
              },
              {
                3: {
                  Name: "Lamborghini Revuelto",
                  Price: {
                    1: "₹10,00,00,000",
                    2: "₹10,10,00,000",
                    3: "₹10,20,00,000",
                  },
                },
              },
            ],
          },
        ],
      },
    },
    {
      Bikes: {
        sports_bikes: [
          {
            Company: "Kawasaki",
            Models: [
              {
                1: {
                  Name: "Kawasaki Ninja ZX-10R",
                  Price: { 1: "₹15,99,000", 2: "₹16,99,000", 3: "₹17,99,000" },
                },
              },
              {
                2: {
                  Name: "Kawasaki Ninja H2",
                  Price: { 1: "₹79,90,000", 2: "₹79,95,000", 3: "₹79,99,000" },
                },
              },
              {
                3: {
                  Name: "Kawasaki Ninja 1000SX",
                  Price: { 1: "₹12,20,000", 2: "₹12,22,000", 3: "₹12,25,000" },
                },
              },
            ],
          },
          {
            Company: "BMW",
            Models: [
              {
                1: {
                  Name: "BMW M 1000 RR",
                  Price: { 1: "₹42,00,000", 2: "₹43,00,000", 3: "₹45,00,000" },
                },
              },
              {
                2: {
                  Name: "BMW S 1000 R",
                  Price: { 1: "₹19,00,000", 2: "₹20,00,000", 3: "₹20,50,000" },
                },
              },
              {
                3: {
                  Name: "BMW R 1200 R",
                  Price: { 1: "₹15,00,000", 2: "₹15,50,000", 3: "₹16,00,000" },
                },
              },
            ],
          },
          {
            Company: "Ducati",
            Models: [
              {
                1: {
                  Name: "Ducati Panigale V2",
                  Price: { 1: "₹20,27,000", 2: "₹21,30,000", 3: "₹22,00,000" },
                },
              },
              {
                2: {
                  Name: "Ducati Streetfighter V4",
                  Price: { 1: "₹22,15,000", 2: "₹23,15,000", 3: "₹24,15,000" },
                },
              },
              {
                3: {
                  Name: "Ducati Streetfighter V2",
                  Price: { 1: "₹18,10,000", 2: "₹19,10,000", 3: "₹20,10,000" },
                },
              },
            ],
          },
        ],
      },
    },
  ];

  const Kawasaki = Garage[1].Bikes.sports_bikes[0].Models.map((item,idx) => item[idx+1])[1]

  const res = {}

  Object.assign(res, {Model_name: Kawasaki['Name'], Price: Kawasaki['Price'][3]})

  console.log(res)

//   console.log(Kawasaki)