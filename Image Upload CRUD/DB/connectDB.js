const mongoose = require("mongoose");

// connecting with db
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://akki:akki11@cluster0.qqhvyzs.mongodb.net/imageupload?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
