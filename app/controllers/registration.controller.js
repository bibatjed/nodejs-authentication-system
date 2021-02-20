const models = require('../models');

module.exports.registrationController = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const userResult = await models.User.findOne({ username });

        if (userResult) {
            throw {
                status: 400,
                message: 'Username already exists',
            };
        }

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
