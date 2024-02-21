// class Config {
//   static dbUser = 'username'
//   static dbPassword = '1234567'
//   static apiToken = 'abcd'

// }

// console.log(Config.apiToken)

///////////////////////////////////////////

// // Utility functions

// // Increment

/////////

class User {
  static id = 1;

  static cache = {
    1: "some value",
  };
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  checkCache() {
    console.log(User.cache);
  }

  // static block
  static {
    console.log("Initialized");
  }

  // static hasInCache() {
  //   this.checkCache();
  // }

  //   // static compareByAge(user1, user2) {
  //   //   return user1.age - user2.age;
  //   // }

  //   // static compareByIncome(user1, user2) {
  //   //   return user1.income - user2.income;
  //   // }
}

// User.hasInCache();

const user1 = new User("Akki Nai", 20, 50000);
// const user2 = new User("Vivek Nai", 17, 10000);
// const user3 = new User("Vaibhavi Nai", 18, 30000);

// const users = [user1, user2, user3];

user1.checkCache();

// // users.sort(User.compareByAge);
// // users.sort(User.compareByIncome);

// console.log(users);
