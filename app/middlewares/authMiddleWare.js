const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const bearerToken = req.headers['authorization'];

        if (!bearerToken)
            throw {
                status: 401,
                message: 'You are not authorized.',
            };

        const token = bearerToken.slice(7);

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err)
                throw {
                    status: 401,
                    message: 'Invalid Token',
                };

            return next();
        });
    } catch (e) {
        return next(e);
    }
};
