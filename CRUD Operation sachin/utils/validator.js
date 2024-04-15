const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const registerUser = joi.object().keys({
  name: joi.string().required().label("Name"),
  email: joi.string().email().trim().required().label("Email"),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .min(6)
    .required(),
  role: joi.string(),
  // avatar: joi.string(),
});

const loginUser = joi.object().keys({
  email: joi.string().trim().email().required().label("Email"),
  password: joi.string().required().label("Password"),
});

const resetPassword = joi.object().keys({
  email: joi.string().email().required().label("Email"),
});

module.exports = {
  registerUser,
  loginUser,
  resetPassword,
};
