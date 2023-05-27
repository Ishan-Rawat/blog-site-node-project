//Here we are creating a server that listens for requests coming from web browsers and send back responses.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    //The request object contains a LOT of details. 
    //So here we are only logging the request url and the request type such as GET and POST (this is given by req.method)
    /*
    The output of req.url is the part succeeding the localhost:3000 part.
    For example, if the request url is http://localhost:3000/about then console.log will return:
    /about
    */
});


server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

