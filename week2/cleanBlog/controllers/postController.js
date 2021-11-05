const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    // pagination
    const page = req.query.page || 1;
    const postPerPage = 2;
    const totalPosts = await Post.find().countDocuments();
    const posts = await Post.find({})
        .sort('-dateCreated')
        .skip((page - 1) * postPerPage)
        .limit(postPerPage);

    res.render('index', {
        posts: posts,
        current: page,
        pages: Math.ceil(totalPosts / postPerPage),
    });
};

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post: post,
    });
};

exports.createPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
};

exports.updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/post/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id); // Post deleted in database
    res.redirect(`/`);
};
