const AppError = require("../utils/AppError");

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    console.log(req.user, "restrict to middleware");
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have access to perform this action", 403)
      );
    }
    next();
  };
};
