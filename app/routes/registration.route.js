const router = require('express').Router();
const {
    registrationController,
} = require('../controllers/registration.controller');

router.route('/').post(registrationController);

module.exports = router;
