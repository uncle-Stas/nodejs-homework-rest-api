const { updateContact } = require('../../models/contacts');
const { HttpError } = require('../../helpers');
const { addSchema } = require('../../schemas/contacts');

const update = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, 'Not found');
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = update;
