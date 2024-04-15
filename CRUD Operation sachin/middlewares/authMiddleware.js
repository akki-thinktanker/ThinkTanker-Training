const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");

exports.protect = async (req, res, next) => {
  try {
    // 1. Get the token and check if its there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return next(
        new AppError("You are not logged in! Please login to get access.", 401)
      );
    }

    // 2. Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3. Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }

    // 4. Check if user changed password after token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next(
        new AppError("User recently changed password! Please login again!", 401)
      );
    }

    // GRANT ACCESS TO PROTECTED ROUTES
    req.user = currentUser;
    // req.locals.user = currentUser
    next();
  } catch (error) {
    console.log(error);
  }
};

// Only for rendered pages, not for error!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1.) Verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2.) Check if user still exist
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) return next();

      // 3.) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // There is a logged in user
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};
