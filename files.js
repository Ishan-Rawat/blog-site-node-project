//The predifined filesystem module in Node is one of the core modules provided by node.
//It allows us to read and write files on the filesystem of the machine Node is running on.

const fs = require('fs');

//DELETING files

fs.unlink('./docs/deleteMe.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log('file deleted');
})