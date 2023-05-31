const express = require('express');

const app = express();

app.listen(3000); 

app.set('view engine', 'ejs');

//Creating our own custom middleware function
//The following middleware function just logs out some of the details about the request we have received
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    /**There is an issue with this middleware. When we visit the page, we dont really get a response on the browser and it just keeps showing the loading icon.
     * This is because the .use() method is executed for all request URLs, and since node reads and tries to match the handler functions from top to bottom, when it finds the first match it stops matching the handler functions
     * This is why our request never gets matched with the appropriate app.get() method.
     * This is also the reason why if we put the method at the bottom of this file we will never run it.
     * 
     * We can solve the first issue by invoking the next() method at the end of this handler method. This method just tells node to continue matching the request with the middleware(handler functions) that come after this method.
     */
    next();
});

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
