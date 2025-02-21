const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done 1");
    // reject("not done 1");
  }, 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("done 2");
    reject("not done 2");
  }, 200);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("not done 3");
    // resolve("done 3");
  }, 100);
});

// Promise.all
// fail first
// if all are resolved - array of resolved data
// if any one fails - op is error message of 1st encountered reject

// Promise.all([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// promise.any()
// return first promise that is full filled
// it is like a short- circuit

// Promise.any([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race()
// returns the first promise that is rejected or fulfilled

Promise.race([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
