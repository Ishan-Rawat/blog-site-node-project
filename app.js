const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { render } = require('ejs');

const app = express();

const dbURI = "mongodb+srv://nodeUser:nodetutorials123@cluster0.x5ryrpu.mongodb.net/node-tuts?retryWrites=true&w=majority"


mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true}));
//It parses the data that comes encoded in the url and parses it into an object that we can use

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title : "About"});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title : "Create a Blog"});
});

//blog routes
app.get("/blogs", (req, res)=> {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', {title: 'all blogs', blogs: result})
        })
        .catch((err) => console.log(err))
});

//handling the post request from the create a blog form
app.post('/blogs', (req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => console.log(err))
});
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id; 
    
    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'blog details'})
        })
        .catch(err => console.log(err))
});
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id) //The method does what it says, and its an async method, so...
        .then(result => {
            /**Here we will send some JSON back to the browser
             * Why not a redirect? Because the front-end JS code in details.ejs sends an AJAX request
             * We cannot redirect as a result of a AJAX result, we must send some JSON or text data back
             * 
             * But the JSON data that we will send back to the browser will have a redirect property.
             * The front-end JS will parse that redirect property and get the URL we want to redirect to.
             */
            res.json({ redirect: '/blogs'});
        })
        .catch(err => console.log(err))
});

app.use((req, res) => {
    res.status(404).render('404', {title : "Not found :("});
});
