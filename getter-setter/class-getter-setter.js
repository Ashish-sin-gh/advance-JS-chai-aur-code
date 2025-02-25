// A getter runs when you read a property.
// A setter runs when you assign a property.

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   get password() {
//     return `${this.password}abcd`;
//   }

//   set password(value) {
//     this.password = value;
//   }
// }

// const ashish = new User("ashish", "ankita");

// console.log(ashish.password); // code results in a "Maximum call stack size exceeded" error due to infinite recursion in the getter and setter of the password property.

class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  get password() {
    return `${this._password}abcd`;
  }

  set password(value) {
    this._password = value;
  }
}

const ashish = new User("ashish", "ankita");

console.log(ashish.password);
