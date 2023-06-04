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

//We deleted all those sandbox routes and will integrate that functionality in the routes below.
// Below we have the routes that don't deal with the database and some new routes that deal with the DB

app.get('/', (req, res) => {
    //instead of rendering a veiw here we will redirect this to a new route that displays all the existing blogs
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
    Blog.find().sort({createdAt: -1}) //createdAt: sort by creation time, -1 value means descending order
        .then((result) => {
            //our index.ejs view already has code to take an array of blogs and render them in html so we will reuse it
            //cuz what mongoDB returns is also an array of blogs
            res.render('index', {title: 'all blogs', blogs: result})
        })
        .catch((err) => console.log(err))
});

app.use((req, res) => {
    res.status(404).render('404', {title : "Not found :("});
});
