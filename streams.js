// Streams are of 2 types : READ streams and WRITE streams.

//READ stream:
const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt');

/*The following function is like an event listener. What event does it listen for?
* That's the first argument. 'data' is the event that is triggered when we receive a new data buffer in the stream.
* The second arg is the callback that is executed whenever the event is triggered
* So basically what the following method does is that everytime it receives a chunk or buffer of datap it prints it.  
*/
readstream.on('data', (chunk) => {
    console.log('---------NEW CHUNK---------------');
    console.log(chunk);
});