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
                Price: { 1: "₹15,99,000", 2: "₹16,99,000", 3: "₹17,99,000" },
              },
            },
            {
              3: {
                Name: "Kawasaki Ninja H2",
                Price: { 3: "₹79,90,000", 2: "₹79,95,000", 1: "₹79,99,000" },
              },
            },
            {
              2: {
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
              3: {
                Name: "Ducati Streetfighter V2",
                Price: { 1: "₹18,10,000", 2: "₹19,10,000", 3: "₹20,10,000" },
              },
            },
            {
              2: {
                Name: "Ducati Streetfighter V4",
                Price: { 1: "₹22,15,000", 2: "₹23,15,000", 3: "₹24,15,000" },
              },
            },
          ],
        },
      ],
    },
  },
];

// Function to convert currency string to number
const convertToNumber = (currencyString) =>
  parseInt(currencyString.replace(/[^0-9]/g, ""), 10);

///////////////////////////////////////////////
var bikeModels = [];
Garage.forEach((item) => {
  const key = Object.keys(item);
  // console.log(key);
  // console.log(item)
  if (key == "Cars") {
    // console.log('cars')
    // console.log(item.Cars)
    if (item.Cars) {
      // console.log("Sports car")
      if (item.Cars.sports_cars) {
        // console.log(item.Cars.sports_cars);
        item.Cars.sports_cars.forEach((car) => {
          // if (car.Company == "Porsche") {
          //   console.log("Porsche");
          // }
          // if (car.Company == "Mercedes") {
          //   console.log("Mercedes");
          // }
          // if (car.Company == "Lamborghini") {
          //   console.log("Lamborghini");
          // }
        });
      }
    }
  } else if (key == "Bikes") {
    // console.log('Bikes')
    if (item.Bikes) {
      // console.log("Sports car")
      if (item.Bikes.sports_bikes) {
        // console.log(item.Bikes.sports_bikes);
        item.Bikes.sports_bikes.forEach((bike) => {
          if (bike.Company == "Kawasaki") {
            // console.log("Kawasaki");
            const kawasakiModels = bike.Models;
            // console.log(kawasakiModels)
            kawasakiModels.forEach((bikeModel, idx) => {
              // console.log(bikeModel[idx + 1]);
              bikeModels.push(bikeModel[idx + 1]);
            });

            // let highestNum = 0;

            // KawasakiPrice.forEach((kawasaki) => {
            //   Object.values(kawasaki).forEach((currStr) => {
            //     const num = convertToNumber(currStr);
            //     if (num > highestNum) {
            //       highestNum = num;
            //     }
            //   });
            // });

            // const highStr = `₹${highestNum.toLocaleString("en-US")}`;
            // console.log(highStr);

            bikeModels.forEach((bikePrice) => {
              // if(bikePrice == highestPrice)
              // {
              //   console.log()
              // }
              let keys = Object.keys(bikePrice.Price);
              console.log(keys);
            });
          }
          // if (bike.Company == "BMW") {
          //   // console.log("BMW");
          //   const bmwModels = bike.Models
          //   console.log(bmwModels)
          // }
          // if (bike.Company == "Ducati") {
          //   // console.log("Ducati");
          //   const ducatiModels = bike.Models
          //   console.log(ducatiModels)
          // }
        });
      }
    }
  } else {
    console.log("We can't find anything");
  }
});

// console.log(bikeModels)
//////////////////////////////////////////////////

// old logic

//   const KawasakiModels = Garage[1]?.Bikes?.sports_bikes?.find(
//     (bike) => bike?.Company == "Kawasaki"
//   )?.Models;
//   const KawasakiBikes = KawasakiModels.map((kawasaki, idx) => kawasaki[idx + 1]);

//   const KawasakiPrice = KawasakiBikes.map((kawasaki, idx) => kawasaki.Price); // we got price in array of objects

//   console.log(KawasakiBikes)
// //   console.log(KawasakiPrice)

//   KawasakiPrice.forEach((el, idx) => {
//     if (el[idx]) {
//       for (let i = 1; i <= 3; i++) {
//         // console.log(el);
//       }
//     }
//   });

// Function to convert currency string to number
// const convertToNumber = (currencyString) =>
//   parseInt(currencyString.replace(/[^0-9]/g, ""), 10);

// let highestNum = 0;

// KawasakiPrice.forEach((kawasaki) => {
//   Object.values(kawasaki).forEach((currStr) => {
//     const num = convertToNumber(currStr);
//     if (num > highestNum) {
//       highestNum = num;
//     }
//   });
// });

// const highStr = `₹${highestNum.toLocaleString("en-US")}`;
// console.log(highStr);

// console.log(KawasakiModels);
// console.log(KawasakiBikes);
// console.log(KawasakiPrice);
