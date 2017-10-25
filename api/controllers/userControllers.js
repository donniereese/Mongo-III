// Import mongoose
const mongoose = require('mongoose');
// Import Post model
const User = require("../models/userModels.js");

// Status Codes
const STATUS_USER_ERROR = 422;

// controller description
const signup = (req, res) => {
    console.log(req.body);
    // Get contents of body that we need,
    // in this case, user and password.
    const { username, password } = req.body;
    // If either one does not exist
    if (!username || !password) {
        console.log('user or password missing...');
        return res.status(STATUS_USER_ERROR).json({ error: 'user or password not provided.' });
    }
    // if either one is not the correct type
    if (typeof username !== 'string' && typeof password !== 'string') {
        console.log('something isnt a string...');
        return res.status(STATUS_USER_ERROR).json({ error: 'Invalid types of data provided.' });
    }
    // Create new User model
    const newUser = new User({ username, password });
    newUser.save()
    .then((saveResponse) => {
        res.json(saveResponse);
    })
    .catch((saveErr) => {
        console.log('Save Error...');
        return res.status(STATUS_USER_ERROR).json({ stack: saveErr.stack, message: saveErr.message });
    });
};

// controller description
const login = (req, res) => {
    console.log(req.body);
    // Get contents of body that we need,
    // in this case, user and password.
    const { username, password } = req.body;
    // If either one does not exist
    if (!username || !password) {
        console.log('user or password missing...\n', req.body, req.query);
        return res.status(STATUS_USER_ERROR).json({ error: 'user or password not provided.' });
    }
    // if either one is not the correct type
    if (typeof username !== 'string' && typeof password !== 'string') {
        console.log('something isnt a string...');
        return res.status(STATUS_USER_ERROR).json({ error: 'Invalid types of data provided.' });
    }
    // Find User by the credentials
    User.findOne({ username, password })
    .exec((err, u) => {
        // Catch error
        if (err) return res.status(STATUS_USER_ERROR).json({ stack: saveErr.stack, message: saveErr.message });
        // Is there actually a user returned
        if (u === null) return res.status(STATUS_USER_ERROR).json({ error: 'No user found with supplied credentials.' });
        // Found user, apparently.
        res.json(u);
    });
};

// Export route controllers
module.exports = {
  signup,
  login
};
