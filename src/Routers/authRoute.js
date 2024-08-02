const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Assume updateUserProfile is a function that handles updating a user's profile
const { updateUserProfile } = require('../controllers/profileController');

router.put('/profile', updateUserProfile);

module.exports = router;
