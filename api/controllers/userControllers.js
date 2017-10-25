// Import mongoose
const mongoose = require('mongoose');
// Import Post model
const User = require("../models/userModels.js");

// Status Codes
const STATUS_USER_ERROR = 422;

// controller description
const signup = (req, res) => {
    // Get contents of body that we need,
    // in this case, user and password.
    const { user, password } = req.body;
    // If either one does not exist
    if (!user || !password) {
        console.log('user or password missing...');
        return res.status(STATUS_USER_ERROR).json({ error: 'user or password not provided.' });
    }
    // if either one is not the correct type
    if (typeof user !== 'string' && typeof password !== 'string') {
        console.log('something isnt a string...');
        return res.status(STATUS_USER_ERROR).json({ error: 'Invalid types of data provided.' });
    }
    // Create new User model
    const newUser = new User({ user, password });
    newUser
    .save()
    .then((saveResponse) => {
        res.json(saveResponse);
    })
    .catch((saveErr) => {
        console.log('Save Error...');
        res.status(STATUS_USER_ERROR).json({ stack: saveErr.stack, message: saveErr.message });
    });
};

// controller description
const login = (req, res) => {
    res.json(false);
};

// Export route controllers
module.exports = {
  signup,
  login
};
