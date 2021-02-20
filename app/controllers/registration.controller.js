const models = require('../models');

module.exports.registrationController = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        await models.User.create({
            username: username,
            password: password,
        });

        return res.json({
            message: 'Success',
        });
    } catch (e) {
        return next(e);
    }
};
