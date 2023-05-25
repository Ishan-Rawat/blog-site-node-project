// Streams are of 2 types : READ streams and WRITE streams.

//READ stream:
const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'}); 
//very basic WRITE stream
const writestream = fs.createWriteStream('./docs/blog4.txt');

readstream.on('data', (chunk) => {
    //console.log('---------NEW CHUNK---------------');
    //console.log(chunk);
    writestream.write('\nNew Chunk\n');
    writestream.write(chunk);
});