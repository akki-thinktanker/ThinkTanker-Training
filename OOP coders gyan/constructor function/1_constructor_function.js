// constructor function first letter capital

// balance default value given as 0
function BankAccount(customerName, balance = 0) {
  // properties
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // Methods
  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// // You have to use new keyword for creating a new object using constructor function
// const akkiAccount = new BankAccount("Akash Nai", 10000);
// const vivekAccount = new BankAccount("Vivek Nai");

// // we shouldn't allow this
// vivekAccount.balance = 50000;

// akkiAccount.deposit(15000);

// vivekAccount.withdraw(25000)

// console.log(akkiAccount);
// console.log(vivekAccount);

//******************************* DOM Manipulation  **************************/

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  ); // using + operator to convert the coming string to number
  account.deposit(+amount.value); // converting amount to number using + operator

  console.log(accounts)
});
