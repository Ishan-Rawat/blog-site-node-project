//The predifined filesystem module in Node is one of the core modules provided by node.
//It allows us to read and write files on the filesystem of the machine Node is running on.

const fs = require('fs');

// READING

/*The following function takes 2 args, 1st is the relative path to the file (The './' signifies the current directory)
*the second is the callback function to be executed once reading is complete
*It is an async function
*/
fs.readFile('./docs/someText.txt', (err, data) =>{
    //This async function takes 2 args,1st is the error if any, 2nd is the data that has been read from the file
    
    if(err){
        console.log(err);
    }
    console.log(data); //This line will output the data buffer. To get it in the human readable form, we write:
    console.log(data.toString());
});
