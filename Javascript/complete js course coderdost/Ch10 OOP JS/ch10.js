// Object Oriented Programming

// Constructor function and the "new" Operator

// We can not use arrow function as constructor

// call "constructor" function using "new" keyword

// 1 new {object} created
// 2 "this" = {object}
// 3 object linked to  prototype
// 4 functional automatically return {object}

// let Car = function (color, model) {
//   // instance properties

//   this.color = color;
//   this.model = model;

// //   methods

// // not a good way
// //   this.login = function(){
// //     console.log('login method')
// //   }
// };

// Car.prototype.startEngine = function(){
//     console.log("This is start engine method")
// }

// // We can also set "properties" to prototype

// Car.prototype.company = 'Honda'

// // console.log(Car.prototype)

// // constructor called

// let car1 = new Car("black", 2022);
// let car2 = new Car("blue", 2012);
// console.log(car1);
// console.log(car2);

// console.log(car1 instanceof Car);
// console.log(car2 instanceof Car);

// console.log(car1.startEngine())

// car1.startEngine()

// console.log(car1.__proto__)

// It is same as

// if we have direk constructor we can use .prototype
// console.log(Car.prototype)

// if we have instance of object then we can use .__proto__

// let instance = new Car('blue', 2000)

// console.log(Car.prototype.isPrototypeOf(Car))
// console.log(instance.__proto__.isPrototypeOf(instance)) // true for object

// Car.prototype is prototype "of all objects" created through the
// Car constructor

// let arr = [2,3,5,7,8] // [] is same as new Array([])

// console.log(arr.__proto__.__proto__) // you'll reach at null at the end of proto chain
// console.log(Object.prototype)

// ES6 Classes (They still implement prototypal inheritance behind the scene)

// class declaration

// setter and getters

// getter and setters allow you to define object accessors (computed properties)
// we can also use in class

// stattic methods (methods which is not present on constructor
// "prototype" property but "constructor" itself)

// Class inheritence (sub class)

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("This is start engine method of Car Class");
  }

  // get _startEngine(){
  //     console.log('This is start engine method using getter')
  // }

  // get description(){
  //     return `Color of Bike is ${this.color} and its model is ${this.model}`
  // }

  // set changeColor(color){
  //     console.log(this.color = color)
  // }
}

// Child class

// class Bike extends Car{
//     // Add some new properties and method as well

//     constructor(color, model, engineCapacity)
//     {
//         super(color, model)
//         this.engineCapacity = engineCapacity
//     }

//     bikeMethod()
//     {
//         console.log("This is method of bike class")
//     }
// }

// let newBike = new Bike("Black", 2023)
// let bike2 = new Bike("Brown", 2021, "200cc")
// console.log(newBike,bike2)

// Child class

// let Bike = function (color, model, engineCapacity) {
//   Car.call(this, color, model);
//   this.engineCapacity = engineCapacity;
// };

// let bike1 = new Bike("Green", 2019, "200CC");
// console.log(bike1);

// static method

// Car.breakMethod = function(){
//     console.log("This is break method of car ")
// }

// Car.breakMethod()

// Car.prototype.breakMethod = function(){
//     console.log("Break Method of car")
// }

// let honda = new Car("black", 2022);

// console.log(honda.__proto__.isPrototypeOf(honda))
// console.log(honda.__proto__)
// honda.startEngine() // accessing as function

// honda._startEngine //accessing as properties, getter

// honda.changeColor = 'blue' //accessing as properties, setter
// console.log(honda)

// console.log(honda.description)

// Important points

// classes are not hoisted
// classes are also first class citizens (Pass as an arguments)
// classes are executed in strict mode
