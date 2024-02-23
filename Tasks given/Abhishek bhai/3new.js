// # (3) Get most expensive model from "Kawasaki" company with price.
// '''
// Output :-
// {'Model_name': 'Kawasaki Ninja H2', 'Price': '₹79,99,000'}
// '''

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
                Price: { 1: "₹95,99,000", 2: "₹16,99,000", 3: "₹17,99,000" },
              },
            },
            {
              2: {
                Name: "Kawasaki Ninja H2",
                Price: { 1: "₹79,90,000", 2: "₹79,95,000", 3: "₹1,79,99,000" },
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
                Price: { 1: "₹3,19,00,000", 2: "₹20,00,000", 3: "₹20,50,000" },
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
                Name: "Ducati Streetfighter V2",
                Price: { 3: "₹18,10,000", 2: "₹19,10,000", 1: "₹20,10,000" },
              },
            },
            {
              3: {
                Name: "Ducati Streetfighter V4",
                Price: { 3: "₹22,15,000", 2: "₹23,15,000", 1: "₹24,15,000" },
              },
            },
          ],
        },
      ],
    },
  },
];

const companyName = "Ducati";

// Function to convert currency string to number
const convertToNumber = (currencyString) =>
  parseInt(currencyString.replace(/[^0-9]/g, ""), 10);

const kawasakis = Garage[1]?.Bikes?.sports_bikes
  ?.filter((el) => el.Company == `${companyName}`)[0]
  ?.Models.map((el) => Object.values(el))
  ?.map((el) => el[0]);
const prices = kawasakis.map((el) => Object.values(el.Price))?.flat(1);
const highestPrice1 = Math.max(...prices.map((el) => convertToNumber(el)));
const highStr = `₹${highestPrice1.toLocaleString("en-IN")}`;

const ans = {};
const highestBikeName = kawasakis.find((el) =>
  Object.values(el?.Price).includes(highStr)
)?.Name;

ans.Model_name = highestBikeName;
ans.Price = highStr;

console.log(ans);

///////////////////////////////////////////////
// const bikeName = "Kawasaki";
// let highestPrice = 0;

// var BikesWithPrice = [];
// Garage.forEach((item) => { // find
//   const key = Object.keys(item);
//   if (key == "Cars") {return}
//   if (key == "Bikes") {
//     if (item.Bikes) {
//       if (item.Bikes.sports_bikes) {
//         item.Bikes.sports_bikes.forEach((bike) => {
//           if (bike.Company == `${bikeName}`) {
//             // console.log(`${bikeName}`);
//             const bikeModels = bike.Models;
//             // console.log(bikeModels);

//             bikeModels.forEach((bikeByKey, idx) => {
//               // console.log(...Object.values(bikeByKey))
//               BikesWithPrice.push(...Object.values(bikeByKey));
//               // BikesWithPrice.push(bikeByKey[idx + 1]);
//             });

//             // console.log(BikesWithPrice);

//             BikesWithPrice.forEach((bikename) => {
//               Object.values(bikename.Price)
//                 //   console.log(Object.values(bikename.Price))
//                 .forEach((currStr) => {
//                   // console.log(currStr)
//                   const num = convertToNumber(currStr);
//                   if (num > highestPrice) {
//                     highestPrice = num;
//                   }
//                 });
//             });

//             const highStr = `₹${highestPrice.toLocaleString("en-IN")}`;
//             // console.log(highStr);

//             BikesWithPrice.forEach((bikePrice) => {
//                 let values = Object.values(bikePrice.Price)
//                 // console.log(values);
//                 if(values.includes(highStr))
//                 {
//                     // console.log(`Highest price found`)
//                     const ans = {}
//                     ans.Model_name = `${bikePrice.Name}`
//                     ans.Price = `${highStr}`
//                 console.log(ans)

//                 }
//                 // console.log(bikePrice.Name)

//                 // console.log(`Model_name: ${bikePrice.Name}, Price: ${highestPrice}`)
//             });
//           }
//         });
//       }
//     }
//   } else {
//     console.log("We can't find anything");
//   }
// });
