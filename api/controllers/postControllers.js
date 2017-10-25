// Import mongoose
const mongoose = require('mongoose');
// Import Post model
const Post = require("../models/postModels.js");

// Status Codes
const STATUS_USER_ERROR = 422;

// controller description
const getPosts = (req, res) => {
    Post.find({}).exec((err, p) => {
        if (err) return res.status(STATUS_USER_ERROR).json({ stack: err.stack, message: err.message });

        res.json(p);
    });
};

// controller description
const newPost = (req, res) => {
    console.log('newPost: ', req.body);
    // Gather post-related input
    const { title, content, author } = req.body;
    // check post input
    if (!title || !content || !author) return res.status(STATUS_USER_ERROR).json({ error: 'Some required post information not supplied.' });
    // Get author for the ObjectID

    // Make a new Post document
    const newPost = new Post({ title, content, author });
    // Save it or lose it
    newPost.save()
    .then((p) => {
        // Check if a new post was not created
        if (p === null || p === undefined || p === {}) return res.status(STATUS_USER_ERROR).json({ error: 'Post save returned no new post.', response: p });

        res.json(p);
    })
    .catch((err) => {
        // If there is an error
        return res.status(STATUS_USER_ERROR).json({ stack: err.stack, message: err.message });
    });
};

// controller description
const getById = (req, res) => {
    console.log('getById: ', req.body, req.params, req.query);
    // get post id from params.
    const { id } = req.params;
    // check if id is correct and exists
    if (!id) return res.status(STATUS_USER_ERROR).json({ error: 'post id was not supplied.' });
    // Find one post by it's id.
    const foundPost = Post.findById(id);
    // Execute and process
    foundPost.exec((err, p) => {
        // There was an error
        if (err) return res.status(STATUS_USER_ERROR).json({ stack: err.stack, message: err.message });
        // return post
        res.json(p);
    });
};

// controller description
const updateById = (req, res) => {
    console.log('updateById: ', req.body);
    res.json(false);
};

// Export route controllers
module.exports = {
  getPosts,
  newPost,
  getById,
  updateById
};
