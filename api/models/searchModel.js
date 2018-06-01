'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var SearchSchema = new mongoose.Schema(
    {
        searchText: { type: String, required: true},
        userId: { type: String, required: true },
        isSaved: {type: Boolean, required: true, default: false},
        dateCreated: { type: Date, default: Date.now }
    }
);

// Return model
module.exports = mongoose.model('User', UserSchema);
