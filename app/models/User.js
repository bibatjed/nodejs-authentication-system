'use strict';

const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.createHashPassword = (passCode) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(passCode, salt);
};

userSchema.methods.validatePassword = function (passCode) {
    return bcrypt.compareSync(passCode, this.password);
};

console.log(userSchema.methods);

module.exports = userSchema;
