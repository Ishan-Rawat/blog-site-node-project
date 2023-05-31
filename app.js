const express = require('express');

const app = express();

app.listen(3000); 

app.set('view engine', 'ejs');

//Now lets try sending data from the handler functions to the templates

//The following code allows us to send the title name of the pages from the different handler functions 
app.get('/', (req, res) => {
    res.render('index', {title : "Blog"})
    /**To send data from the handler function we specify an object as the second argument to the .render() method
     * The properties can be named whatever we want
     * The properties can be accessed directly from anywhere in the template file that is being rendered.
     * That too without referencing the property.*/; 
});

app.get('/about', (req, res) => {
    res.render('about', {title : "About"});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title : "Create a Blog"});
});

app.use((req, res) => {
    res.status(404).render('404', {title : "Not found :("});
});
