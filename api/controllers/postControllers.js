// Import mongoose
const mongoose = require('mongoose');
// Import Post model
const Post = require("../models/postModels.js");

// Status Codes
const STATUS_USER_ERROR = 422;

// controller description
const getPosts = (req, res) => {
    res.json(false);
};

// controller description
const newPost = (req, res) => {
    res.json(false);
};

// controller description
const getById = (req, res) => {
    res.json(false);
};

// controller description
const updateById = (req, res) => {
    res.json(false);
};

// Export route controllers
module.exports = {
  getPosts,
  newPost,
  getById,
  updateById
};
