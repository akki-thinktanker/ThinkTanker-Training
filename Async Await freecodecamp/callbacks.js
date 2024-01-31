// synchronous

// console.log(' I ')
// console.log(' Eat ')
// console.log(' Ice Cream ')
// console.log(' With a ')
// console.log(' Spoon ')

// asynchronous

// This is async function

// console.log(" I ");
// console.log(" Eat ");
// setTimeout(() => {
//   console.log(" Ice Cream ");
// }, 4000);
// console.log(" With a ");
// console.log(" Spoon ");

// callback - calling a function inside another function

// function one(callTwo){
//     console.log(' Step 1 complete. Please call step 2')
//     callTwo();
// }

// function two(){
//     console.log(' Step 2')
// }

// one(two)

// ice cream example

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started.");
    setTimeout(() => {
      console.log(`The fruits has been chopped`);

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

        setTimeout(() => {
          console.log(`The machine has been startetd`);

          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings.`);

              setTimeout(() => {
                console.log(`Serve Icecream`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
