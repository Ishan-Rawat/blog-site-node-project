//Here we are creating a server that listens for requests coming from web browsers and send back responses.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    

    res.setHeader('Content-Type', 'text/html');
    res.write("<head><link rel='stylesheet' href='#'></head>");
    res.write("<h1>HTML response</h1>");
    res.write("<h2>Less goo</h2>");
    res.end();
});


server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

