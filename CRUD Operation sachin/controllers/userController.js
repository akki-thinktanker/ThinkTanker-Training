const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const uid = req.params.id;
    const user = await User.findOne({ _id: uid });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(200).json(error);
  }
};

// this is done with registerUser now

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const data = {
      name,
      email,
      password,
      role,
    };

    const user = await User.create(data);

    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error, ":error");
  }
};

exports.updateUser = catchAsync(async (req, res, next) => {
  const uid = req.params.id;
  const updateData = req.body
  const updatedData = await User.findOneAndUpdate({ _id: uid }, {$set: updateData}, {new: true});

  res.status(200).send(updatedData);
  console.log(updatedData);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const uid = req.params.id;
  const deletedUser = await User.findByIdAndDelete({ _id: uid });

  res.status(200).send(deletedUser);
  console.log(deletedUser);
});
