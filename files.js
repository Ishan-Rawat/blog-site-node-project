//The predifined filesystem module in Node is one of the core modules provided by node.
//It allows us to read and write files on the filesystem of the machine Node is running on.

const fs = require('fs');

//creating and deleting DIRECTORIES:
/*
This function is async. 1st argument is where and what directory to create
2nd argument is the callback function that is to be called when the directory creation is done
*/
fs.mkdir('./assets', (err) => {
    if(err){
        console.log(err)
    }
    console.log('folder created')
});