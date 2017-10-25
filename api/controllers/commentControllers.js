// Import mongoose
const mongoose = require('mongoose');
// Import Post model
const Comment = require("../models/commentModels.js");

// Status Codes
const STATUS_USER_ERROR = 422;

// controller description
const getCommentsByPostId = (req, res) => {
    res.json(false);
};

// controller description
const newCommentForPostId = (req, res) => {
    res.json(false);
};

// Export route controllers
module.exports = {
  getCommentsByPostId,
  newCommentForPostId
};
