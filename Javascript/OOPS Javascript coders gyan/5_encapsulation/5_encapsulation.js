class BankAccount {
  // constructor will be shown like class BankAccount
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  // inheriting from parent class
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); // passing parameter to parent class
    // console.log(this.#balance)
  }

  #calculateInterest(amount) {
    console.log("Calculating interest");
  }

  takeBusinessLoan(amount) {
    // logic
    this.#calculateInterest(amount);
    console.log("Taking business Loan: " + amount);
  }
}

const akkiAccount = new CurrentAccount("Akki", 2000);
// Private field
// akkiAccount.#balance = 5000; //Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class (at 5_encapsulation.js:36:12)
// akkiAccount.setBalance("akki"); // error if trying to input something else except
// akkiAccount.balance = (400);

akkiAccount.takeBusinessLoan(20000);
console.log(akkiAccount.balance);
