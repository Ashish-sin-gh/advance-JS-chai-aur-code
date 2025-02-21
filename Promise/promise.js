// creating a promise
//promise represents the eventual completion or failure of a async operations

const promise1 = new Promise((resolve, reject) => {
  //do an async task
  //db call
  //network call
  //file handling
  setTimeout(function () {
    console.log("1 sec baad executed");
    resolve({ name: "ashish", class: "acpl" });
    reject();
  }, 2000);
});

promise1
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("andi mandi sandi");
  });

async function users() {
  try {
    const usersList = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await usersList.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

users();
