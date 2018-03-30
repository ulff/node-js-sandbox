var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Args must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 7).then((result) => {
  console.log('Sum:', result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('Should be 45:', result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
