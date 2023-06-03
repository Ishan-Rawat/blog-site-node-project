const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbURI = "mongodb+srv://nodeUser:nodetutorials123@cluster0.x5ryrpu.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) //We moved app.listen() over here because we want to start listening for requests and respond to them only after a connection has been established with the database.
    .catch((err) => console.log(err));
 
//next we want to create a model and schemas for our blod database. For that, check the models folder.
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
