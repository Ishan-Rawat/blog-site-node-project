const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
/**Schema is what defines the structure of the documents we store in a collection, and this is what a model wraps around
 * mongoose.Schema is a constructor function and we are going to use to create a new schema, which we will store in a constant
 */

/**new Schema() creates a new instance of the schema object
 * the first argument is an object that is used to define the schema(or the structure of the docs)
 * In this object we define the different properties that we want our blog objects to have.(objects??)
 * 
 * The second argument is an options object
 */
const blogSchema = new Schema({
    /**we want one of the properties to be title
     * so we could just write title: String
     * but we also want to define that title is a required field/property
     * so for the title key we can give an object as a value in the following manner:
     */
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});
//The second argument here, automatically generates timestamp properties for our documents.
// and everytime we update and create a blog document it will automatically assign values to those timestamp properties. 

//next we will create the Model
//The model encapsulates the schema and provides an interface with which we will communicate with the Collection for that document type.

// Usually model names start with capital letters
const Blog = mongoose.model('Blog', blogSchema);
/**The first argument is the model name. What we provide here is very important
 * Because it will take this name and pluralize it, then look for collections with that pluralised name whenever we try to communicate with the DataBase.
 * Therefore, here, it will look for collections named Blogs
 * 
 * The next argument is the Schema that we want to want the model to be based on.
 */
module.exports = Blog;