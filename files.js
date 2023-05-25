//The predifined filesystem module in Node is one of the core modules provided by node.
//It allows us to read and write files on the filesystem of the machine Node is running on.

const fs = require('fs');

//WRITING FILES:
/* 1st arg is the file we want to write to
* 2nd is the text we want to write
* 3rd is the callback function that is called when writing is done
* This is also an async function
*/

fs.writeFile('./docs/someText2.txt', 'Hello again', () => {
    console.log('file was written');
});