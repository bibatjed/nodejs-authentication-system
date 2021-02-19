const router = require('express').Router();

router.route('/token').post();

router.route('/logout').post();

module.exports = router;
