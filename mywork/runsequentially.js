async function runSequentially(functions) {
  const result = [];
  for (let i = 0; i < functions.length; i++) {
    const func = functions[i];
    // console.log('run', i)
    result.push(await func());
  }
  return result
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