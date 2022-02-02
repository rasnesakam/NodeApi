
// init express js
const express = require('express'); 

// init express js application instance
const app = express();

// init db
const mongodb = require('./mongodb');

// Use UserController
const userController = require('./user/UserController');
app.use('/api/users',userController);

// export app for using by external files
module.exports = app;

