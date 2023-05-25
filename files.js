//The predifined filesystem module in Node is one of the core modules provided by node.
//It allows us to read and write files on the filesystem of the machine Node is running on.

const fs = require('fs');

//creating and deleting DIRECTORIES:
/*The fs.mkdir() function throws an error if the directory to be created already exists. 0
* We can check if a directory exists by using the fs.existsSync() method. It returns true if it does.
* we use the not operator (!) to negate the true to false so that we run the mkdir() func when the dir doesnt exist.
* fs.existsSync() is a synchronous function and it will BLOCK further execution till it is finished executing
*/
if(! fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created');
    });
} else{
    //if the directory already exists we will delete it.
    //We can use the fs.rmdir() method to delete directoris
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    });
}