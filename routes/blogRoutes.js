const express = require('express');
const Blog = require('../models/blog');
// Notice that we have changed the path from ./models/blog to ../models/blog in the 1st commit of this branch
//This is because we have to get out of this folder then go into the models folder
const router = express.Router();
//next we need to replace app.get etc with router.get and so on...

/**After scoping the handler in app.js, we will have to change the URLS in the routes below
 * This is because we are already coming to these routes from /blogs, so a /blogs route in this file
 * will be applied when request URL= /blogs/blogs
 * since no one in their right mind would request that, we will change /blogs in this file to just '/' */
router.get('/create', (req, res) => {
    res.render('create', {title : "Create a Blog"});
});

//blog routes
router.get("/", (req, res)=> {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', {title: 'all blogs', blogs: result})
        })
        .catch((err) => console.log(err))
});

//handling the post request from the create a blog form
router.post('/', (req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => console.log(err))
});
router.get('/:id', (req, res) => {
    const id = req.params.id; 
    
    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'blog details'})
        })
        .catch(err => console.log(err))
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id) //The method does what it says, and its an async method, so...
        .then(result => {
            res.json({ redirect: '/blogs'});
        })
        .catch(err => console.log(err))
});

module.exports = router;
//next we need to import this in app.js