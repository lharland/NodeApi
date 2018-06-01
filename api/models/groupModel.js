'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var GroupSchema = new mongoose.Schema(
    {
        text: { type: String, required: true, max: 20 },
        image: { type: String, required: true },
        lastActivity: { type: Date, default: Date.now }
    }
);

// Return model
module.exports = mongoose.model('Group', GroupSchema);
