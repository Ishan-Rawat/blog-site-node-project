// As our application scales, our previous node server becomes kinda useless. Express is a framework that 
// allows us to create servers that handle multiple requests, and make routing and stuff easier

const express = require('express');

const app = express();

app.listen(3000); //we gave it the port number as arg. It infers the localhost part
// (not sure) the above code also returns an instance of the server that we can store in a variable for use in the future for things like socket programming.

//The following code routes a response for the localhost:3000 request URL
app.get('/', (req, res) => {
    res.send('<p>home page</p>');
    /**Here we did not have to specify res.write() then res.end()
     * Also, this method infers the type of content being sent and sets the header type by itself
     * It can even decide the status code by itself. Here it will be 200
     */
});