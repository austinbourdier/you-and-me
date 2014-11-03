var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        firstName     : String
});

module.exports = mongoose.model( 'User', userSchema );