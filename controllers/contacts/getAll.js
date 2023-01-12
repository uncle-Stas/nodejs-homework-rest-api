const { Contact } = require('../../models/contact');

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user; // const owner = req.user._id;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const reqParams = favorite ? { owner, favorite } : { owner };

    const result = await Contact.find(reqParams, '-createdAt -updatedAt', {
      skip,
      limit,
    }).populate('owner', 'name email');

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
