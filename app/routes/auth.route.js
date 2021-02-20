const router = require('express').Router();

router
    .route('/token')
    .post(require('../controllers/auth.controller').loginUser);

router.route('/logout').post();

module.exports = router;
