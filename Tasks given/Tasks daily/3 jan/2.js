
// # (2) Get 2nd model of "Ducati" company with 3rd price.
// '''
// Outout :-
// {'Model_name': 'Ducati Streetfighter V4', 'Price': '₹24,15,000'}
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
                  Name: "Ducati Streetfighter V2",
                  Price: { 1: "₹18,10,000", 3: "₹19,10,000", 2: "₹20,10,000" },
                },
              },
              {
                3: {
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
  
  const DucatiModel = Garage[1].Bikes.sports_bikes.find(
    (bike) => bike.Company == "Ducati"
  ).Models;
  
  const secondDucati = DucatiModel.find((ducati) => ducati[2])
  const ThirdPrice = secondDucati[2].Price[3]
  
  const ans = {};
  
  ans.Model_Name = secondDucati[2]['Name']
  ans.Price = ThirdPrice
  
  
  
  // console.log(DucatiModel);
//   console.log(secondDucati);
  console.log(ans);
  
  
  // const DucatiSecond = DucatiModel.map((ducati,i) => i == Object.keys(DucatiModel))
  // const arr = DucatiModel.filter((ducati) => {
  
  //     if(Object.keys(ducati)) == '2')
  //         return ducati;
      
      
  //     // (ducati) => Object.keys(ducati)).flat();
  // }
  
  // const DucatiSecond = DucatiModel.map((ducati) => ducati);
  
  // 1
  
  // const LamborghiniCars = Garage[0].Cars.sports_cars.find((cars) => cars.Company == 'Lamborghini').Models
  // const Lamborghini = LamborghiniCars.map((car,idx)=> car[idx+1])
  // console.log(LamborghiniCars)
  // console.log(Lamborghini)
  
  ///////////////////////////////////////////////////////////////////
  