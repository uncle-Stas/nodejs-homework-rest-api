const { removeContact } = require('../../models/contacts');
const { HttpError } = require('../../helpers');

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);

    if (!result) {
      throw HttpError(404, 'Not found');
    }

    res.json({ message: 'Delete succes' });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
