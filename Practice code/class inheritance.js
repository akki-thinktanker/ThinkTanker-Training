class Car{
    constructor(brand){
        this._carname = brand
    }

    get carname(){
        return this._carname
    }

    set carname(x){
        this._carname = x
    }
}

const newCar = new Car("Ford")

newCar.carname = 'Hyundai'

console.log(newCar)


// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

// That means that you must declare a class before you can use it


// Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).