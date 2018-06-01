'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var UserSchema = new mongoose.Schema(
    {
        password: { type: String, required: true},
        salt: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now }
    }
);

// Return model
module.exports = mongoose.model('User', UserSchema);
