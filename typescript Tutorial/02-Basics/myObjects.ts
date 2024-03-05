// const User = {
//     name: "akki",
//     email: "akki@mail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "akki", isPaid: false, email: "akki@mail.com"}

// createUser(newUser)

// function createCourse() : {name: string, price: number} {
//     return {name: "nodejs", price: 399}
// }

// ////////////////////////////////////

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type MyString = string;

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "", email: "", isActive: true });

// ///////////////////////////////////////////

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User = {
  _id: "12332",
  name: "akki",
  email: "akki@mail.com",
  isActive: false,
};


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber &  cardDate & {cvv: number}

let akkiCard : cardDetails = {
    cardnumber: "234554323443345",
    carddate: "20/12/2022",
    cvv: 4343
}



myUser.email = "akash@mail.com";
// myUser._id = "424" // can't do this because it is readonly

export {};
