const express = require('express');
const cntrl = require('../../controllers/contacts');
const { schemasJoi } = require('../../models/contact');
const { validateReqBody, isValidId, authentificate } = require('../../middlewares');

const router = express.Router();

router.get('/', authentificate, cntrl.getAll);

router.get('/:contactId', authentificate, isValidId, cntrl.getById);

router.post('/', authentificate, validateReqBody(schemasJoi.add), cntrl.add);

router.delete('/:contactId', authentificate, isValidId, cntrl.removeById);

router.put('/:contactId', authentificate, isValidId, validateReqBody(schemasJoi.add), cntrl.update);

router.patch(
  '/:contactId/favorite',
  authentificate,
  isValidId,
  validateReqBody(schemasJoi.updateFavorite),
  cntrl.updateFavorite
);

module.exports = router;
