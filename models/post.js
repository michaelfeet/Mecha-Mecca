const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comment: String,
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})

// A post has many likes, a like belongs to a POST
const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // referencing a model
    photoUrl: String,
    title: String,
    comments: [commentSchema] // embedded schema// One Post has many Comments!
})


module.exports = mongoose.model('Post', postSchema);