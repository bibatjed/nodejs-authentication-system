const router = require('express').Router();

const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/authMiddleWare');

router.route('/token').post(authController.loginUser);

router.route('/logout').post(authMiddleware, authController.logoutUser);

module.exports = router;
