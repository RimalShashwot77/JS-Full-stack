const express = require('express');
const userProfile = require('../controllers/userProfileController');
const app = express();


app.post('/userProfile', userProfile);

module.exports=app();