const express = require('express');
const cntrl = require('../../controllers/auth');
const { schemasJoi } = require('../../models/user');
const { validateReqBody, authentificate, upload } = require('../../middlewares');

const router = express.Router();

router.post('/users/signup', validateReqBody(schemasJoi.signup), cntrl.signup);

router.post('/users/login', validateReqBody(schemasJoi.login), cntrl.login);

router.post('/users/logout', authentificate, cntrl.logout);

router.post('/users/current', authentificate, cntrl.getCurrent);

router.patch(
  '/users',
  authentificate,
  validateReqBody(schemasJoi.updateSubscription),
  cntrl.updateSubscription
);

router.patch('/users/avatars', authentificate, upload.single('avatar'), cntrl.updateAvatar);

router.get('/users/verify/:verificationToken', cntrl.verify);

router.post('/users/verify', validateReqBody(schemasJoi.checkEmail), cntrl.resendVerifyEmail);

module.exports = router;
