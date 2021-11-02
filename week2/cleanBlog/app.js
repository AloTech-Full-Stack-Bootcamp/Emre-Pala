const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    const posts = await Post.find({}); //Get all posts
    res.render('index', {
        posts: posts,
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post: post,
    });
});

app.get('/add-post', (req, res) => {
    res.render('add-post');
});

app.post('/add-post', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});
