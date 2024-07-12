import Joi = require("joi");

export const validateThread = Joi.object({
  conten: Joi.string().required(),
  image: Joi.string().required(),
  user: Joi.object({
    id: Joi.number().required(),
    fullname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    profile: Joi.string().allow(null).optional(),
    sampul: Joi.string().allow(null).optional(),
  }).required(),
});
