const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    sex: { type: String, required: true },
    dateOfBirth: { type: Date, required: true, min: 1940 - 01 - 01, max: 2020 - 01 - 01 },
    placeOfBirth: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
    photo: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('User', userSchema);
