// const akkiAccount = new BankAccount("Akash Nai", 1000);
// Hoisting doesn't work with classes

// make sure define class then use its methods 

// you can do class expression too
// like 
// const BankAccount = class { // constructor will be shown like class 
class BankAccount { // constructor will be shown like class BankAccount
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance -= amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

// const akkiAccount = new BankAccount("Akash Nai", 1000);

// akkiAccount.deposit(500);
// console.log(akkiAccount);

// akkiAccount.withdraw(1000);
// console.log(akkiAccount);

// vivekAccount = new BankAccount("vivek Nai", 0);

// vivekAccount.deposit(1500);
// console.log(vivekAccount);

// vivekAccount.withdraw(500);
// console.log(vivekAccount);

////////////////////////////////////////

// // hoisting...
// hello();
// function hello(){
//   console.log("Hello")
// }

// works with normal function


// function expression

// function hello(){}
// or const hello = function(){}

// class expression, check above where class is declared using variable
const test = new BankAccount();
console.log(test) // constructor name will be shown as class in web browser console