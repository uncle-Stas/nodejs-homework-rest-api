const { HttpError } = require('../helpers');

const validateReqBody = schema => {
  const validation = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return validation;
};

module.exports = validateReqBody;
