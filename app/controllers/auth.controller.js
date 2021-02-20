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

        if (userResult.validatePassword(password)) {
            
            //TODO: ADD PRIVATE KEY
            const token = jwt.sign(
                { id: userResult.id, username: userResult.username },
                'shhhhh'
            );

            return res.json({
                message: 'success',
                result: {
                    token,
                },
            });
        }
    } catch (e) {
        return next(e);
    }
};
