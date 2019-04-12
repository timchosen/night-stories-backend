const joi = require('joi');

module.exports.register = {
  body: {
    email: joi.string().email().required(),
    name: joi.string().required(),
    password: joi.string().alphanum().min(3).max(30)
      .required(),
    designation: joi.string(),
    is_admin: joi.boolean(),
    is_premium: joi.boolean(),
  },
};


module.exports.update = {
  body: {
    email: joi.string().email(),
    name: joi.string(),
    password: joi.string().alphanum().min(3).max(30),
    display_picture: joi.string(),
  },
};

module.exports.login = {
  body: {
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(3).max(30)
      .required(),
  },
};

