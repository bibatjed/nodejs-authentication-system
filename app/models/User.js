'use strict';

module.exports = {
    schema: {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: false,
        },
    },
};
