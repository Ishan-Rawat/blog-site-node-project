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
    res.sendFile('./views/404.html', {root: __dirname});
});

/**How this works is that for every request encountered Node tries to match the request URL with the .get() methods from top to bottom
 * It then executes the first function whose first arg matches the requested URL
 * Incase of an invalid URL request, it reaches the app.use() method, and when it does it stops matching and executes app.use()
 * This is the reason why we must put the app.use() method at the VERY LAST.
 */