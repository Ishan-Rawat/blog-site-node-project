const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

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

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title : "About"});
});

//we will now put all handlers with routes starting with /blogs in the blogRoutes.js file
app.use('/blogs', blogRoutes);
//by specifying the 1st argument as '/blogs' we have scoped the handler
//this means that it will apply the routes in blogRoutes only when the request URL starts with /blogs

app.use((req, res) => {
    res.status(404).render('404', {title : "Not found :("});
});
