const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/nodemailer");
const crypto = require('crypto')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output in response
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const avatar = req.file.filename;

  const newUser = await User.create({
    name,
    email,
    password,
    role,
    avatar,
  });
  const url = `${req.protocol}://${req.get("host")}/me`;

  // send email to new user
  await new Email(newUser).sendWelcome();

  createSendToken(newUser, 201, res);
});

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //  1. check if user provided email and password
  if (!email || !password) {
    // return res
    //   .status(400)
    // .json({ message: "Please Enter Email and Password!" });
    return next(new AppError("Please Enter Email and Password!", 400));
  }

  // 2. check if user exists in database and password is correct
  const userDB = await User.findOne({ email }).select("+password");

  if (!userDB || !(await userDB.correctPassword(password, userDB.password))) {
    // return res.status(401).json({ message: "Incorrect Email or Password!" });
    return next(new AppError("Incorrect Email or Password!", 401));
  }

  // 3. if everything ok, send token to client
  createSendToken(userDB, 200, res);
});

exports.logoutUser = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "loggedout", {
    // this will change value of jwt cookie to 'loggedout' string, so it won't have jwt token
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1. Get user based Posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with email address.", 404));
  }

  // 2. Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3. Send it to user's email
  try {
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "Success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "There was an error sending the email. Try again later!",
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1. Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");



  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2. If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3. Update changedPasswordAt property for the user
  // 4. Log the user in, send JWT
  createSendToken(user, 200, res);
});
