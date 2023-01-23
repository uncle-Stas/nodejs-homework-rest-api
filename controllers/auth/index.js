const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const getCurrent = require('./getCurrent');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
  signup,
  login,
  updateSubscription,
  logout,
  getCurrent,
  updateAvatar,
  verify,
  resendVerifyEmail,
};
