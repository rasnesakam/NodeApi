const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
});

mongoose.model('User',UserSchema);

module.exports = mongoose.model('User');