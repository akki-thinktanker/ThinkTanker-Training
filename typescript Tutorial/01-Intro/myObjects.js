"use strict";
// const User = {
//     name: "akki",
//     email: "akki@mail.com",
//     isActive: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12332",
    name: "akki",
    email: "akki@mail.com",
    isActive: false,
};
myUser.email = "akash@mail.com";
myUser._id = "424"; // can't do this because it is readonly
