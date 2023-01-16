const { Contact } = require('../../models/contact');

const add = async (req, res, next) => {
  try {
    const { _id: owner } = req.user; // const owner = req.user._id;
    const result = await Contact.create({ ...req.body, owner });

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
