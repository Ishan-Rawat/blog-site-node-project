//Most of the times we need to send big HTML documents as responses. In that case it is much more efficient 
//to read the html page from a file and then send it. 

const http = require('http');
const fs = require('fs'); //for reading the stored html file

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    res.setHeader('Content-Type', 'text/html');

    //send an HTML file
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err);
            res.end()
        } else{
            /**We could either write:
             * res.write(data);
             * res.end();
             * OR we can simply write:
             */
            res.end(data);
        }
    });
});


server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

