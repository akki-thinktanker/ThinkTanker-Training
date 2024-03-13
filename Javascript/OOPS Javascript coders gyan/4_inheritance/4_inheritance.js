class BankAccount {
  // constructor will be shown like class BankAccount
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  // inheriting from parent class
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); // passing parameter to parent class
  }

  takeBusinessLoan(amount) {
    console.log("Taking business Loan: " + amount);
  }
}

class SavingAccount extends BankAccount {
  // inheriting from parent class
  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); // passing parameter to parent class
  }

  takePersonalLoan(amount) {
    console.log("Taking Personal Loan: " + amount);
  }
}

const rakeshAccountSaving = new SavingAccount("Rakesh K", 500);
// const rakeshAccountCurrent = new CurrentAccount("Rakesh K", 500);

rakeshAccountSaving.deposit(800);
console.log(rakeshAccountSaving);

rakeshAccountSaving.withdraw(800);
console.log(rakeshAccountSaving);

// rakeshAccountCurrent.takeBusinessLoan(40000);
// console.log(rakeshAccountCurrent);

//////////////////////////////////////////////////////

// // DRY

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance); // constructor linking
//   this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking business Loan: " + amount);
// };

// const rakeshAccountCurrent = new CurrentAccount("Rakesh K", 500);

// // saving account

// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance); // constructor linking
//   this.transactionLimit = 10000;
// }

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log("Taking Personal Loan: " + amount);
// };

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// const rakeshAccountSaving = new SavingAccount("Rakesh K", 500);

// rakeshAccountSaving.deposit(800);
// rakeshAccountSaving.withdraw(800);
// rakeshAccountCurrent.takeBusinessLoan(40000);
// console.log(rakeshAccountSaving);
