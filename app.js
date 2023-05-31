const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000); 

app.set('view engine', 'ejs');

//USING THIRD-PARTY MIDDLEWARE
/**In this case we will use a third party middleware called morgan. It used for logging
 * STEP 1: in the terminal run npm install morgan
 * STEP 2: import it into this file
 * STEP 3: invoke it in this file
 */
app.use(morgan('dev'));

app.get('/', (req, res) => {
    
    const blogs = [
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"},
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"},
        {title: "Paste some Gibberish here", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium!"}
    ]
    res.render('index', {title : "Blog", blogs});
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
