const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const users = data.users;
const model = require("../model/user.model");
const User = model.User;
const jwt = require("jsonwebtoken");

// exports.createUser = (req, res) => {
//   const user = new User(req.body)

//   user.save((err,doc) => {
//     console.log({err, doc})
//     if(err)
//     {
//       res.status(400).json(err)
//     }
//     else{
//       res.status(201).json(doc)
//     }
//   })
//   // console.log(req.body);
//   // users.push(req.body);
//   // res.status(201).json(req.body);
// };

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUser = async (req, res) => {
  // const id = +req.params.id;
  const id = req.params.id;

  const user = await User.findById(id);
  res.json(user);

  // const user = users.find((p) => p.id === id);
  // res.json(user);
};

// replaces entire object
exports.replaceUser = async (req, res) => {
  // const id = +req.params.id;
  const id = req.params.id;

  try {
    const doc = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
  }
  // const userIndex = users.findIndex((p) => p.id === id);
  // users.splice(userIndex, 1, { ...req.body, id: id });

  // res.status(201).json({});
};
exports.updateUser = async (req, res) => {
  // const id = +req.params.id;
  const id = req.params.id;

  try {
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

  // const userIndex = users.findIndex((p) => p.id === id);
  // const user = users[userIndex];
  // users.splice(userIndex, 1, { ...user, ...req.body });

  // res.status(201).json({});
};
exports.deleteUser = async (req, res) => {
  // const id = +req.params.id;
  const id = req.params.id;

  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

  // const userIndex = users.findIndex((p) => p.id === id);
  // const user = users[userIndex];
  // users.splice(userIndex, 1);

  // res.status(201).json(user);
};
