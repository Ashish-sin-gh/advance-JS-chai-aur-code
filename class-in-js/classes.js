// classes is just syntatic sugar over prototypes in js
// ES6 classes are just a new way to write prototype-based code

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  // constructor is a method that is called when you create an instance of a class(new keyword)

  encryptPassword() {
    return `${this.password}1234`;
  }
}

const ram = new User("ram", "ram@gmail.com", "password");
console.log(ram.encryptPassword());

//behind the scene
function UserBTS(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
UserBTS.prototype.encryptPass = function () {
  return `${this.username}abc`;
};

const seeta = new UserBTS("seeta", "seeta@gmail.com", "abc");
console.log(seeta.encryptPass());

console.log(seeta.__proto__);
console.log(seeta.prototype);
