const router = require('express').Router();

const authRoute = require('./auth.route');
const registrationRoute = require('./registration.route');

router.use('/auth', authRoute);

router.use('/registration', registrationRoute);

module.exports = router;
