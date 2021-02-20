'use strict';

const bcrypt = require('bcrypt');

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

    // instance methods goes here
    // methods: {

    // },

    // // statics methods goes here
    statics: {
        createHashPassword: (passCode) => {
            const salt = bcrypt.genSaltSync();
            return bcrypt.hashSync(passCode, salt);
        },
    },
};
