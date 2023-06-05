const express = require('express');
const router = express.Router();
const  blogController = require('../controllers/blogController');

router.get('/create', blogController.blog_create_get);

//blog routes
router.get("/", blogController.blog_index);
//handling the post request from the create a blog form
router.post('/', blogController.blog_create_post);
//request to get an individual blog
router.get('/:id', blogController.blog_details);
//request to delete a blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;
//next we need to import this in app.js