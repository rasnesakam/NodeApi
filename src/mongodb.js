
require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect(process.env.DB_MONGO_URI);