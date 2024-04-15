const mongoose = require("mongoose");

// creating userSchema
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  avatar: String,
});

// creating model of it
const User = mongoose.model("User", userSchema);

module.exports = User;

// const data = { name: "akki", age: 20, avatar: "user-1.png" };
// User.create(data);
