function BankAccount(customerName, balance = 0) {
  // properties
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // // Methods
  // this.deposit = function (amount) {
  //   this.balance += amount;
  // };

  // this.withdraw = (amount) => {
  //   this.balance -= amount;
  // };
}

const akkiAccount = new BankAccount("Akash Nai");
const vivekAccount = new BankAccount("Vivek Nai");

//   console.log(akkiAccount)

// BankAccount.prototype.test = 'This is a test'

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

akkiAccount.deposit(3000);
akkiAccount.withdraw(2500);
console.log(akkiAccount);
