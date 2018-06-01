'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var ChatSchema = new mongoose.Schema(
    {
        text: { type: String, required: true},
        userId: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }
);

// Return model
module.exports = mongoose.model('Chat', ChatSchema);
