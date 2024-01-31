// Chaining Methods

class bankAccount{
    constructor(owner, pin){
        this.owner = owner
        this.pin = pin
        this.movements = []
    }

    getMovements(){
        return this.movements
    }

    deposit(val){
        this.movements.push(val)
        return this;
    }

    withdraw(val){
        this.deposit(-val)
        return this
    }
}

let account = new bankAccount("Zack", 5682)

// chain of methods

account.deposit(100).withdraw(50).deposit(50).withdraw(50)

console.log(account.getMovements())
console.log(account)