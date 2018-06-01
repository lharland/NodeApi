'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var LikeSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        itemId: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now }
    }
);

// Return model
module.exports = mongoose.model('User', LikeSchema);
