const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String

});

module.exports = mongoose.model('Users', usersSchema);