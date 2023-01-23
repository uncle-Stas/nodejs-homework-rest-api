const { Schema, model } = require('mongoose');
const Joi = require('joi');

const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please, input name'],
    },
    email: {
      type: String,
      match: emailRegex,
      unique: true,
      required: [true, 'Please, input email'],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Please, input password'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    avatarURL: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model('user', userSchema);

const signup = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const login = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const updateSubscription = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

const checkEmail = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
});

const schemasJoi = {
  signup,
  login,
  updateSubscription,
  checkEmail,
};

module.exports = {
  User,
  schemasJoi,
};
