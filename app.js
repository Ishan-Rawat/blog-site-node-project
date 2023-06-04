const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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

app.use((req, res) => {
    res.status(404).render('404', {title : "Not found :("});
});
