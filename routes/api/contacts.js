const express = require('express');
const cntrl = require('../../controllers/contacts');
const contactsJoiSchemas = require('../../schemas');
const { validateReqBody } = require('../../middlewares');

const router = express.Router();

router.get('/', cntrl.getAll);

router.get('/:contactId', cntrl.getById);

router.post('/', validateReqBody(contactsJoiSchemas.add), cntrl.add);

router.delete('/:contactId', cntrl.removeById);

router.put('/:contactId', validateReqBody(contactsJoiSchemas.add), cntrl.update);

router.patch(
  '/:contactId/favorite',
  validateReqBody(contactsJoiSchemas.updateFavorite),
  cntrl.updateStatusContact
);

module.exports = router;
