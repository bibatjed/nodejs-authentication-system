const models = require('../models');

const jwt = require('jsonwebtoken');

module.exports.loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const userResult = await models.User.findOne({ username });

        if (!userResult) {
            throw {
                status: 400,
                message: `User doesn't exists`,
            };
        }

        if (!userResult.validatePassword(password)) {
            throw {
                status: 400,
                message: 'Invalid Username or Password',
            };
        }

        const token = jwt.sign(
            { id: userResult.id, username: userResult.username },
            process.env.JWT_SECRET
        );

        return res.json({
            message: 'success',
            result: {
                token,
            },
        });
    } catch (e) {
        return next(e);
    }
};

module.exports.logoutUser = async (req, res, next) => {
    try {
        return res.json({
            message: 'Success',
        });
    } catch (e) {
        return next(e);
    }
};
