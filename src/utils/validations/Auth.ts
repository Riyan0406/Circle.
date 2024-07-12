import Joi = require("joi");

export const regisShcema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  fullname: Joi.string().required(),
  profile: Joi.string().optional(),
  sampul: Joi.string().optional(),
});

export const loginShcema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});
