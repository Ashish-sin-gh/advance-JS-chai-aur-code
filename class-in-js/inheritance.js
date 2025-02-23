class User {
  constructor(username) {
    this.username = username;
  }

  printUser() {
    console.log(`user name is ${this.username}`);
  }
}

class Admin extends User {
  constructor(username, name, password) {
    super(username);
    this.name = name;
    this.password = password;
  }

  printAdminUsername() {
    console.log(
      `${this.name} with username of ${this.username} is now an admin `
    );
  }
}

const amit = new Admin("amit@123", "amit", 123);

amit.printAdminUsername();
