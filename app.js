const express = require('express');

const app = express();

app.listen(3000); 

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// To send a default response for invalid URLs, we use the following function:
// We use the .use() function to create and fire middleware 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
    //Previously when we sent the 404 response, the status code for it was 200
    //If we wish to send the status code 404, we use the status() method. This method also sends the response object, so we just 'tack on' the .sendFile() method at the end of it.
});

/**How this works is that for every request encountered Node tries to match the request URL with the .get() methods from top to bottom
 * It then executes the first function whose first arg matches the requested URL
 * Incase of an invalid URL request, it reaches the app.use() method, and when it does it stops matching and executes app.use()
 * This is the reason why we must put the app.use() method at the VERY LAST.
 */