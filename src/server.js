
// require 'dotenv' for accessing environment variables
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 3000;

const server = app.listen(port, () =>{
    console.log(`Express listening on port ${port}`);
});