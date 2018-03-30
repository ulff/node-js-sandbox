var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('It worked.')
    reject('It failed.');
  }, 2500);
});

// somePromise.then((message) => {
//   console.log('Success: ' + message);
// }, (errorMessage) => {
//   console.log('Error: ' + errorMessage)
// });

somePromise.then((message) => {
  console.log('Success: ' + message);
}).catch((errorMessage) => {
  console.log('Error: ' + errorMessage)
});

