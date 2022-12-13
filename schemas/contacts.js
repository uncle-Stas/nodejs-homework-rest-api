const Joi = require('joi');

const add = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)
    .required(),
  favorite: Joi.bool(),
});

const updateFavorite = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = {
  add,
  updateFavorite,
};
