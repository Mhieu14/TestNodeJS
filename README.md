# TestNodeJS

#Test ReactJS EC, Fork this repo and show us your development progress via a Pull Request

## Run Sequentially

Implement the runSequentially function, that should return a Promise that resolves to an array of results. The first argument to runSequentially, functions, is an array of functions where each function from the functions array returns a Promise. The functions should be run sequentially, one after another. If any of the functions throw an exception, the runSequentially should reject the Promise. The first element in the result array should be the result of the first function from the functions array, the second element in the result array should be the result of the second function from the functions array, and so on.

For example, the following code should print "[2, 3]":
```javascript
let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
      counter += 1;
      resolve(counter);
  });
}

let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if(promise) {
  promise.then(result => console.log(result))
  .catch(error => console.log("Error: " + error));
}
```
Exam:
```javascript
async function runSequentially(functions) {
  // Write your code here
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
      counter += 1;
      resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if(promise) {
  promise.then(result => console.log(result))
  .catch(error => console.log("Error: " + error));
}
module.exports.runSequentially = runSequentially;
```

## Stream Transform

A company's BI suite requires data to be pre-processed into a different format. Since the amount of data is far larger than can fit into the server's RAM, this must be done using streams.

Finish the setupStreams function that should set up streams so that they:

* Receive data from dataInputStream.
* Transform each chunk into an object and add an incremented id field that starts from zero.
* Write the object into the dataOutputStream.
* Invoke the callback argument once the dataInputStream is finished.

Each chunk the dataInputStream receives will be a valid JavaScript object in JSON string format.

For example, the following code:
```javascript
let readable = new stream.Readable();
let writable = new stream.Writable({  objectMode: true, 
                                      write: (chunk, encoding, callback) => {
                                        console.log(chunk);
                                        callback(null, true);
                                      }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push(null);
```
should print:
```javascript
{ log: 'Request received', id: 0 }
onEnd
```

Exam:
```javascript
const stream = require('stream');

function setupStreams(dataInputStream, dataOutputStream, callback) {
  // Write your code here
}

let readable = new stream.Readable();
let writable = new stream.Writable({  objectMode: true, 
                                      write: (chunk, encoding, callback) => {
                                        console.log(chunk);
                                        callback(null, true);
                                      }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;
```
