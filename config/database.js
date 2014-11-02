var dotenv = require('dotenv')
    dotenv.load();

module.exports = {
  'URI' : process.env.MONGO_URI
};