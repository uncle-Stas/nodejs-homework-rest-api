const { Schema, model } = require('mongoose');
const Joi = require('joi');

const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/;
const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, 'Set email for contact'],
    },
    phone: {
      type: String,
      match: phoneRegex,
      required: [true, 'Set phone for contact'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Contact = model('contact', contactSchema);

const add = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().pattern(emailRegex).required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  favorite: Joi.bool(),
});

const updateFavorite = Joi.object({
  favorite: Joi.bool().required(),
});

const schemasJoi = {
  add,
  updateFavorite,
};

module.exports = {
  Contact,
  schemasJoi,
};
