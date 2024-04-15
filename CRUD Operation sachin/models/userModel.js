const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please enter Your Name"] },
  email: {
    type: String,
    required: [true, "Please enter Email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter Password"],
    minLength: 8,
    select: false,
  },
  // passwordConfirm: {
  //   type: String,
  //   required: [true, "Please enter your confirm Password"],
  // },
  role: { type: String, enum: ["user", "admin", "visitor"], default: "user" },
  avatar: { type: String, default: "default.jpg" },
  passwordResetToken: String,
  passwordResetExpires: Date,
  passwordChangedAt: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// encrypt passwords with bcrypt and then store them to database
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // if jwttimestamp is less than changed time stamp, it will return true
    return JWTTimestamp < changedTimeStamp;
  }

  // returning false means password is not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, 'generated token: ' + this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
