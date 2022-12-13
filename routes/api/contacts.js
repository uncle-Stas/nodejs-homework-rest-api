const express = require('express');
const cntrl = require('../../controllers/contacts');
const { validateReqBody } = require('../../middlewares');
const schemas = require('../../schemas');

const router = express.Router();

router.get('/', cntrl.getAll);

router.get('/:contactId', cntrl.getById);

router.post('/', validateReqBody(schemas.addJoiSchema), cntrl.add);

router.delete('/:contactId', cntrl.removeById);

router.put('/:contactId', validateReqBody(schemas.addJoiSchema), cntrl.update);

module.exports = router;
