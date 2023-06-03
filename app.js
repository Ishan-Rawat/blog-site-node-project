const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); //run nom install mongoose

const app = express();
// Read Notion notes titled: "MongoDB and Mongoose Basics" first.
//MongoDB URI
const dbURI = "mongodb+srv://nodeUser:nodetutorials123@cluster0.x5ryrpu.mongodb.net/?retryWrites=true&w=majority"
/**doubt: in the tutorial, in the auto generated URI after mongodb.net/ it had test?retryWrites....
 * The instructor then changes test? to node-tuts?... which happens to be the database name.
 * In my case, the auto generated URI has neither test, nor my database name. what to do?.
 * The mongoDB "console" does show connection made successfully.
 */

//mongoose.connect(dbURI); //The method expects the connection URI as the argument.
//The youtube instructor got a deprecation warning when he just left the line like this. To solve it he provided an options object as the secong argument.
//I am not facing the same issue for some reason.

mongoose.connect(dbURI).then((result) => { //the .connnect() method is an asynchronous method and returns a promise. Thus we can tack on the .then() method to it.
    console.log(result);
}).catch((err) => {
    console.log(err);
});

app.listen(3000); 

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
