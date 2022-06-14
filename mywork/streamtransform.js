const stream = require('stream');

function setupStreams(dataInputStream, dataOutputStream, callback) {
  let id = 0;
  // Receive data from dataInputStream.
  dataInputStream.on('data', (chunk) => {
    // Transform each chunk into an object and add an incremented id field that starts from zero.
    const jsonChunk = JSON.parse(chunk.toString());
    const data = {...jsonChunk, ...{id}};
    id += 1;
    // Write the object into the dataOutputStream.
    dataOutputStream.write(data);
  });
  // Invoke the callback argument once the dataInputStream is finished.
  dataInputStream.on('end', callback);
  dataInputStream.on('error', (err) => console.log(err));
}

let readable = new stream.Readable();
let writable = new stream.Writable({  
  objectMode: true, 
  write: (chunk, encoding, callback) => {
    console.log(chunk);
    callback(null, true);
  }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;