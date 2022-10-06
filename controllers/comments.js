const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initate the S3 constructor which can talk to aws/s3 our bucket!
// import uuid to help generate random names
const { v4: uuidv4 } = require('uuid');
// since we are sharing code, when you pull you don't want to have to edit the
// the bucket name, thats why we're using an environment variable
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const SECRET = process.env.SECRET;

module.exports = {
    create,
    getAll
}

async function create(req, res) {
    console.log(req.body, " <- req.body", req.user);
    try {
        const post = await Post.findById(req.body.postId);
        post.comments.push({
            comment: req.body.comment,
            user: req.user,
        });
        await post.save();
        res.status(201).json({ data: "comment added?????" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err });
    }
}

async function getAll(req, res) {
    try {
        const post = await Post.findById({ _id: req.params.id })
        res.status(200).json({ data: post.comments });
    } catch (err) {
        console.log(err.message, '<<<show post error');
        res.status(400).json({ error: 'error in show post' })
    }
}