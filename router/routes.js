var User    = require('../config/models/user.js')
  , async      = require('async')
  , nodemailer = require('nodemailer')
  , dotenv     = require('dotenv');

    dotenv.load();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

module.exports = function( app ) {

}