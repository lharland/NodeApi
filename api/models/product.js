'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var ListingSchema = new mongoose.Schema(
    {
        date: { type: Date, required: true, default: Date.now },
        text: { type: String, required: true, max: 20 },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        condition: { type: String, required: true },
        availability: { type: String },
        location: { type: String },
        isFavorite: {type: Boolean},
        numberOfLikes: {type: Number},
        categoryId: {type: Number},
        userId: {type: Number}
    }
);

// Return model
module.exports = mongoose.model('Listing', ListingSchema);
