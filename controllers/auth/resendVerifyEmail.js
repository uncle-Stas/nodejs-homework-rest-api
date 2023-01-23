const { HttpError, sendMail } = require('../../helpers');
const { User } = require('../../models/user');

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw HttpError(404);
    }

    if (user.verify) {
      throw HttpError(400, 'Verification has already been passed');
    }

    const verifyEmail = {
      to: email,
      subject: 'verify you email',
      html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click for virifycation youre email</a>`,
    };

    await sendMail(verifyEmail);

    res.json({
      message: 'Verification email sent',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerifyEmail;
