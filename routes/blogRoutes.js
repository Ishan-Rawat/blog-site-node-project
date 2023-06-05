const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();
//next we need to replace app.get etc with router.get and so on...

router.get('/blogs/create', (req, res) => {
    res.render('create', {title : "Create a Blog"});
});

//blog routes
router.get("/blogs", (req, res)=> {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', {title: 'all blogs', blogs: result})
        })
        .catch((err) => console.log(err))
});

//handling the post request from the create a blog form
router.post('/blogs', (req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => console.log(err))
});
router.get('/blogs/:id', (req, res) => {
    const id = req.params.id; 
    
    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'blog details'})
        })
        .catch(err => console.log(err))
});
router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id) //The method does what it says, and its an async method, so...
        .then(result => {
            res.json({ redirect: '/blogs'});
        })
        .catch(err => console.log(err))
});

module.exports = router;
//next we need to import this in app.js