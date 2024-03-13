// ES6

// Destructuring the arrays

let hotel = {
  name: "hottell",
  location: "street No xyz delhi",
  categories: ["Chinease", "Italian", "English"],
};

// Simple example

// without destructuring

let items = [2, 3, 5, 7];

// lengthy method
// let x = items[0]
// let y = items[1]
// let z = items[2]
// let p = items[3]

// using array destructuring

let [x, y, z, p] = items;

// console.log(x, y, z, p);

// let [first, second] = hotel.categories

// for skipping element
let [first, , third] = hotel.categories;

// console.log(first, third)

let [main, , secondary] = hotel.categories;
// console.log(main, secondary); // this semicolon caused big trouble

// swapping using destructuring

// switch the category(use case)

// without destructuring

// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary)

// [secondary,main] = [main,secondary];

// console.log(main,secondary);

// // Destructuring of nested Arrays

// let nums = [2,3,[6,9]]
// // let [a,,b] = nums;

// let [a,,[c,d]] = nums
// console.log(a,c,d)

// Data structure, String, operators

// Destructuring of "Objects"

hotel = {
  name: "hottell",
  Location: "street No xyz delhi",
  categories: ["Chinease", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  starterMenu: ["SpecialFoodA", "SpecialFoodB", "SpecialFoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
  },
};

// let {name, Location, mainMenu} =  hotel;
// console.log(name, Location, mainMenu)

// set customize name to object property

// left side original name, right side given name
// let {name: hotelName, Location: hotelLocation, mainMenu: menu} =  hotel;
// console.log(hotelName, hotelLocation, menu)

// Setting default values

// let {name, mainMenu = [], categories = []} = hotel

// console.log(name, mainMenu, categories)

// Destructuring nested objects

// let { name, openingHours } = hotel;
// console.log(name, openingHours);

// let {
//   monday: { open, close },
// } = openingHours;
// console.log(monday);

// Spread operator (Unpacking of array elementts)

// let nums = [2, 3, 5, 7];
// console.log(...nums);

// // usecase

// let newArr = [9, 10, ...nums];
// console.log(newArr);

// let updatedMainMeny = [...hotel.mainMenu, "FoodD", "FoodE"];

// console.log(updatedMainMeny);

// // Join 2 arrays

// let joinedArray = [...nums, ...newArr];
// console.log(joinedArray);

// // create shallow copy using spread operator

// let copyArray = [...updatedMainMeny];
// copyArray[1] = "Updated Food";
// console.log(copyArray);

// // We can also use spread operator on Strings

// let passion = "Programmming";
// console.log(...passion);

// Rest Pattern and parameter

// Spread

// let nums = [2,3,4,5]

// // This is spread
// // Spread(...) operator it is present in the RHS of =
// let newArray = [1, ...nums]
// console.log(newArray)

// // Syntax of Rest(...) get elements and packed them into array
// // Use in LHS of =

// let [a,b,...others] = newArray;

// console.log(others)

// // Objects

// let {sunday, ...weekDays} = hotel.openingHours;

// console.log(sunday,weekDays)

// Short Circuiting ( &&, ||)

// Falsy values => 0, false, null, undefined, ''(empty string)

// AND (&&) operator (Output true if all input true )

// let result = 5000 && "Coders"; // not move towards next operand if falsy value, if found truthy value then go till end and return that value
// console.log(result) // original form

// OR (||) operator (Output true if any given input true)

// let result = "pro" || 0;
// console.log(result)

// As || operator find first output true. It simply return that
// true value and does not move towards next operands

// Nullish coalescing operator (??)

// For nullish coalesing operator (??) only "null" and "undefined" are falsy value

let numGuests = 0;
let result = numGuests || 10;
// console.log(result);

let result2 = numGuests ?? 10;
// console.log(result2); // 0 is not nullish value

// It return first non-nullish value

// for-of loop

let menu = [...hotel.mainMenu, ...hotel.starterMenu];
// console.log(menu)

// for(let elem of menu)
// {
//   console.log(elem)
// }

// If we want both index as well as value
// for(let [i,item] of menu.entries())
// {
//   console.log(`${i+1}: ${item}`)
// }

// Enhanced Object literals

// Before ES6 and After ES6

let openingHours = {
  sunday: { open: "09:00AM", close: "11:00PM" },
  monday: { open: "10:00AM", close: "10:00PM" },
  tuesday: { open: "10:00AM", close: "10:00PM" },
};

let menuType = "goldMenu";

hotel = {
  name: "hottell",
  Location: "street No xyz delhi",
  categories: ["Chinease", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  starterMenu: ["SpecialFoodA", "SpecialFoodB", "SpecialFoodC"],

  // Before ES6
  // openingHours: openingHours,
  // order: function(){

  // }

  // After ES6 - same key as variable then assign variable
  openingHours,

  // for creating method we can just use round brackets after that methodname
  order() {},

  [menuType]: ["Different Food items..."],
};

// console.log(hotel)

// Optional chaining (?.)

// Let suppose we want to check thiis hotel open on saturday or not
// If open then at what time

// console.log(hotel.openingHours.saturday.open)

// To avoid this error two methods

// without optional chaining

// if(hotel.openingHours && hotel.openingHours.sunday)
// {
//   console.log(hotel.openingHours.sunday.open)
// }

// with optional chaining

// console.log(hotel.openingHours?.saturday?.open)

// Check previous value of the operator =>  null or underfined
// return undefined

// Looping Objects (Object_keys, values, entries)

// Objects are non-iterables but indirectly we can...

// Keys(properties)

// let properties = Object.keys(openingHours);
// console.log(properties);
// // we know how to loop over array

// for (let key of properties) {
//   console.log(key);
// }

// // values

// let values = Object.values(openingHours);
// console.log(values);

// // complete object

// let entries = Object.entries(openingHours);
// console.log(entries);

// for (let [day, { open, close }] of entries) {
//   console.log(`On ${day} We Open at ${open} and Close at ${close}`);
// }

// Sets

// Sets are just collection of unique values

// EXamples

// let itemSet = new Set([1, 2, 3, 4, 5, 1, 4, 3, 2, 4]);
// console.log(itemSet);
// console.log(itemSet.size); //set doesn't have length property
// console.log(itemSet.has(2)) // check if value present or not
// itemSet.add(9) // similar to array push, but won't add if similar value found
// itemSet.add(9)

// console.log(itemSet)
// itemSet.delete(9)
// console.log(itemSet)

// console.log(itemSet[0]) // can't access values directly, it will return undefined directly

// // Set are also iterables

// for(let item of itemSet){
//   console.log(item)
// }

// Maps

// It is data structure which is used to map values into keys
// In map the data type of keys can be of "any"

// Map is much similar to object

let restaurantMap = new Map();

// Adding values into the Map

restaurantMap.set('name', "Bombay Hotel");
restaurantMap.set(1, "Address1");
restaurantMap.set(2,"Address2").set(true,"we are open today").set(false, "we are close today")

console.log(restaurantMap)


// getting values

console.log(restaurantMap.get(false))

// size of map
console.log(restaurantMap.size)

