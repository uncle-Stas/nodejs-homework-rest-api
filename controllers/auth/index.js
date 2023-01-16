const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const getCurrent = require('./getCurrent');
const updateAvatar = require('./updateAvatar');

module.exports = {
  signup,
  login,
  updateSubscription,
  logout,
  getCurrent,
  updateAvatar,
};
