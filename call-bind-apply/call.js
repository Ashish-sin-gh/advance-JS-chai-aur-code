// call
// call stack
// why we have this keyword (call)?
// call expicilty calls a function
// call is used to hold the reference of the object
// FUNCTION BORROWING - borrow function from other objects and use it in our object

// example 1
function setUserName(username) {
  this.username = username;
  // return this.username;
}

function createUser(username, password) {
  // this.username = setUserName(username); // this will give output as undefined coz setUserName is not returning anything
  setUserName.call(this, username); // this "this" is the object of createUser
  // we will use this "this" as setUserName is not returning anythinga nd will get removed from the memory once it is done executing
  this.password = password;
}

const user1 = new createUser("ahsish", "1234");
console.log(user1);
