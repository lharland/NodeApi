'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema


var ProfileSchema = new mongoose.Schema(
    {
        text: { type: String, required: true, max: 20 },
        followerId : { type: Number, required: true },
        followingId: {type: String, required: true},
        firstName: { type: String },
        lastName: { type: String },
        photo: {type: String},
        birthday:  { type: Date, required: true, default: Date.now },
        city: { type: String },
        email: { type: String },
        location: { type: String },
        bio: {type: String},
        website: {type: String},
        userId: {type: String, required: true},
        dateCreated: { type: Date, required: true, default: Date.now }
    }
);

// Return model
module.exports = mongoose.model('Listing', ListingSchema);
