const express = require('express');
const cntrl = require('../../controllers/contacts');
const { schemasJoi } = require('../../models/contact');
const { validateReqBody, isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', cntrl.getAll);

router.get('/:contactId', isValidId, cntrl.getById);

router.post('/', validateReqBody(schemasJoi.add), cntrl.add);

router.delete('/:contactId', isValidId, cntrl.removeById);

router.put('/:contactId', isValidId, validateReqBody(schemasJoi.add), cntrl.update);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateReqBody(schemasJoi.updateFavorite),
  cntrl.updateFavorite
);

module.exports = router;
