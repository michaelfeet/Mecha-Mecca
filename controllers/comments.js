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

module.exports={
    create,
    index
}

async function create(req, res) {
    const post = await Post.findById(req.params.id)
    const comment = await Post.comments.create({
        username: req.user.username,
        userId: req.params.user,
        comment: req.body
    })
}

async function index(req, res) {
    try {
        const posts = await Post.comments.find({}).sort({ createdAt: 1 }).populate('user').exec();
        res.status(200).json({ data: posts });
    } catch (err) {
        res.status(400).json({ err });
    }
}