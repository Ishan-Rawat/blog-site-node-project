// BASIC ROUTING
/**When we run the previous code, the server just sent back the same response no matter what URL we requested
 * That makes for a very crappy website.
 * The following code sends the specific  HTML page the user is requesting, and sends a 404 page if the requested page doesn't exist
 */
const http = require('http');
const fs = require('fs'); //for reading the stored html file

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method);
    
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end()
        } else{
            res.end(data);
        }
    });
});


server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

