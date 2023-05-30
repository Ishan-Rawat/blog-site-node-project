const express = require('express');

const app = express();

app.listen(3000); 

//STEP 2 of using EJS (settings)
app.set('view engine', 'ejs');
/**We use the app.set method to set and change configurations/settings of our express application
 * Here we are telling express that for view engine we are using EJS
 * Next up, we may need to tell express what directory to look up for finding the templates of the view engine
 * by default, express looks for them in the views folder. But, if we want to store them in some other directory we need to specify it in the following manner:
 * app.set('views', 'myviews');
 */

// Another thing to note is that in the views folder, we no longer need static html files. so index.html will be replaced by index.ejs
app.get('/', (req, res) => {
    res.render('index'); //This is another cool thing about using tempalte engines. None of that messy stuff anymore. We use this simple one line of code to send a html file as response
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

//We dont need that redirect anymore

app.use((req, res) => {
    res.status(404).render('404');
});
