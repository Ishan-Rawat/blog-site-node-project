//Here we are creating a server that listens for requests coming from web browsers and send back responses.

const http = require('http');

/*
* Here we are storing an instance of the server in a variable so that we can use it again for something like
  web sockets.
* We give this server function a call back function that is run everytime it receives a request. This step is
  not necessary.
* This function has to be given 2 arguments: a request object and a response object.
* The request object stores information such as request type(GET, POST,etc), request URL, etc.
*/
const server = http.createServer((req, res) => {
    console.log('Request made');
});

//The server won't do anything without invoking the listener function.
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

/*  LOCALHOST and PORT NUMBER
*'localhost' is basically a URL that is mapped to a very specific IP address called the loopback address.
  loopback address = 127.0.0.1. This address just takes us to our own computer.

* PORT NUMBER: its basically a specific channel, gateway or a door that a specific program should communicate through.
* The are usually many different programs on our PC that communicate with the internet, so port numbers are
  used to keep the data for specific appliactions separate.

*/