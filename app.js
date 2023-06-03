const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = "mongodb+srv://nodeUser:nodetutorials123@cluster0.x5ryrpu.mongodb.net/node-tuts?retryWrites=true&w=majority"


mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
 

//Creating a test route for testing connectivity with the database using the model we just created
app.get('/add-blog', (req, res) => {
    //Creating a blog document using a new instance of the Blog model
    //Here we must provide values to all the properties that we defined in the schema, exceept the timestamp properties.
    const blog = new Blog({
        title: "new blog",
        snippet: "about my new blog",
        body: "more about my new blog"
    });
    //The instance of a model provides us many methods, here we will use the save() method to save the doc we just defined above
    blog.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err))
});
//When we run this and visit localhost:3000/add-blog it shows an object representation of the blog, which is sent back by MongoDB once it has saved the document
//Also, after going to the mongoDB dashboard I found out that it stored the document in the blogs collection in a test Database it created itself.
//Thus, doubt clear, we do need to specify the database name in the URI.

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
