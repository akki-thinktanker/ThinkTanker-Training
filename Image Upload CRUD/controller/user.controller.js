const fs = require("fs");
const path = require("path");

const User = require("../model/user.model");

// controller to perform operation over model
exports.createUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const age = req.body.age;
    const data = {
      name,
      age,
    };

    const userDB = await User.find({ name });

    if (data.name === "" || data.age === "") {
      res.end("Upload all data");
      fs.unlinkSync(req.file.path);
    } else {
      console.log(typeof userDB[0], "inside else 1");
      if (userDB[0] !== undefined) {
        res.status(200).send("User already exist");
        fs.unlinkSync(req.file.path);
        console.log(userDB[0], "if condition");
      } else {
        console.log(name, "inside elsee");
        data.avatar = req.file.filename;
        console.log(data.avatar);
        const user = await User.create(data);

        //   res.send(user);
        //   res.end();
        res.status(200).json(user);
      }
    }
  } catch (err) {
    console.log(err);
  }

  next();
};

// showing users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

//updating user
exports.updateUser = async (req, res, next) => {
  try {
    const { name, age, avatar } = req.body;
    const data = { name, age, avatar };
    console.log(data);
    console.log(req.params.id);
    console.log(req.body);

    if (!data.name && !data.age && !data.avatar) {
      return res.status(400).send("Atleast one field required for update");
    }
    console.log(data.avatar);
    const updatedData = await User.findByIdAndUpdate(req.params.id, {
      data,
    });
    console.log(updatedData);
    res.send(updatedData);
    res.end();
  } catch (err) {
    console.log(err);
  }

  next();
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    fs.unlinkSync(`./uploads/${user.avatar}`);
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(200).json({ message: "User doesn't exist" });
    console.log(err);
  }

  next();
};

// deleting folder code
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      console.log(curPath);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log(`Deleted Folder: ${folderPath}`);
  } else {
    console.log(`Folder ${folderPath} does not exist.`);
  }
}

exports.deleteAllUsers = async (req, res, next) => {
  try {
    const folderToDelete = "./uploads";
    deleteFolderRecursive(folderToDelete);

    const deletedUsers = await User.deleteMany({});
    // deletedUsers.forEach(user => fs.unlinkSync(`./uploads/${user.avatar}`))
    // fs.unlinkSync(`./uploads`);
    console.log(deletedUsers);

    res.status(200).json({ message: `All users deleted` });
  } catch (err) {
    console.log(err);
  }
  next();
};
