const express = require('express');
const cntrl = require('../../controllers/auth');
const { schemasJoi } = require('../../models/user');
const { validateReqBody } = require('../../middlewares');

const router = express.Router();

router.post('/signup', validateReqBody(schemasJoi.signup), cntrl.signup);

router.post('/login', validateReqBody(schemasJoi.login), cntrl.login);

module.exports = router;
