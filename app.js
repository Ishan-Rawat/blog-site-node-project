const express = require('express');

const app = express();

app.listen(3000); 

app.set('view engine', 'ejs');
/**This time, we want to send an array of blogs(they're all objects themselves) to the index.ejs page
 * Where, we will use a for loop to to "print" each of them out.
*/
app.get('/', (req, res) => {
    
    const blogs = [
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"},
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"},
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"}
    ]
    res.render('index', {title : "Blog", blogs});
    // remember that in an object, "blogs: blogs" is equal to just "blogs" 
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
