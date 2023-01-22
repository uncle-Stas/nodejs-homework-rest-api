const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const sendEmail = require('../../helpers/sendMail');

const { nanoid } = require('nanoid');
const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

const { BASE_URL } = process.env;

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, 'Email in use');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();

    const newUser = await User.create({
      ...req.body,
      avatarURL,
      verificationToken,
      password: hashPassword,
    });

    const verifyEmail = {
      to: email,
      subject: 'verify you email',
      html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Click for virifycation youre email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
