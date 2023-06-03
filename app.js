const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = "mongodb+srv://nodeUser:nodetutorials123@cluster0.x5ryrpu.mongodb.net/node-tuts?retryWrites=true&w=majority"


mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
 
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: "new blog",
        snippet: "about my new blog",
        body: "more about my new blog"
    });
    blog.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err))
});

//Now lets query the database for all the blogs stored in it
app.get('/all-blogs', (req, res) => {
    //This time we don't need a new instance of the Blog model because we are not creating any document(huh?)
    // .find() method just returns all the documents in the collection
    Blog.find()
        .then((result) => res.send(result))
        .catch((err)=> console.log(err))
});
//Finding a single blog using its ID
app.get('/single-blog', (req, res) => {
    Blog.findById('647b21df46388b47da09b307')
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
    //MongoDB doesn't actually store document IDs as strings, but when we query it, it converts them into strings for comparision or something.
});

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static('public')); 

app.get('/', (req, res) => {
    
    const blogs = [
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"},
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"},
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"}
    ]
    res.render('index', {title : "Blog", blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title : "About"});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title : "Create a Blog"});
});

app.use((req, res) => {
    res.status(404).render('404', {title : "Not found :("});
});
