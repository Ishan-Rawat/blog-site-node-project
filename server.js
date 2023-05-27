//Here we are creating a server that listens for requests coming from web browsers and send back responses.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    /**In order to create a response object we first set its header
     * For that we specify the header type, and what type of content we are sending such as plain text, HTTP, JSON, etc
     * next we set the content of the response using res.write() method
     * Then we close the header using res.end() and then send it.
     */

    res.setHeader('Content-Type', 'text/plain');
    res.write('Harro EveryNyan');
    res.end();
});


server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

