const { User } = require("../../models/user");

const logout = async (req, res, next) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });

    res.json({
      message: "Logout success"
    })
  } catch (error) {
    next(error);
  }
};

module.exports = logout;