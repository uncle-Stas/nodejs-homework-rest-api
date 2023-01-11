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

('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmU5M2I4NzAwNzZiYjdmMDdmOGRlOCIsImlhdCI6MTY3MzQzNDA2MCwiZXhwIjoxNjczNTE2ODYwfQ.9n0mpRFR_UEfYScFd38EUr9Yp0XrtymV6BQhjIfsfBQ');
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmU5MzViNzAwNzZiYjdmMDdmOGRlMCIsImlhdCI6MTY3MzQzNDEwMCwiZXhwIjoxNjczNTE2OTAwfQ.x-TWSga4z9Zcewy_L4ld-Fw07sh9rLB8N1qfpOoFBB8');
