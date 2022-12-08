const express = require('express');
const cntrl = require('../../controllers/contacts');

const router = express.Router();

router.get('/', cntrl.getAll);

router.get('/:contactId', cntrl.getById);

router.post('/', cntrl.add);

router.delete('/:contactId', cntrl.removeById);

router.put('/:contactId', cntrl.update);

module.exports = router;
