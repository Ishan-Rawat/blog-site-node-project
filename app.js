// As our application scales, our previous node server becomes kinda useless. Express is a framework that 
// allows us to create servers that handle multiple requests, and make routing and stuff easier

const express = require('express');

const app = express();

app.listen(3000); 

//The following code routes a response for the localhost:3000 request URL
//This time we are sending a HTML response by reading a file
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
    //The sendFile() method treats the first argument as an absolute path by default.
    //Since we have given it a relative path, in the next argument we give it an object that tells it what the current directory is(so that it can resolve the relative path)
});

//To respond to other request URLs we can jus create more app.get calls(not sure what the correct word is)
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

//REDIRECTS
app.get('/about-us', (req, res) => {
    res.redirect('/about');
    //This method forces the browser to change the request to /about or something not sure
    //automatically sets the status code to 301 (checked it on chrome, it was 302)
});