// object literal - litrally an object
const user = {
  username: "ashish",
  email: "ashish.singh1@timesgroup.com",
};

// constructor function (new)
// ek hi object literal se multiple instances bana sako
// instance is basically a copy
// constructor function gives you a copy

function userDetails(username, phoneNumber, fatherName) {
  this.username = username;
  this.phoneNumber = phoneNumber;
  this.fatherName = fatherName;
}

const user1 = new userDetails("ashish", 9420023310, "CN singh");
const user2 = new userDetails("ankita", 9420023310, "PN singh");
// console.log(user1);
// console.log(user2);

// new keyword

// an empty object is created- instance
// constructor function is called
// this is attached to this instance

/*
  --------------------------------------------------------------------------
  what happens behind the scene when the new keyword is used

  a new object is created
  
  a prototype is linked with newly created object's constructor functions
  
  constructor is called

  new object is returned
  -------------------------------------------------------------------------
*/

function rateList(item, rate) {
  this.item = item;
  this.rate = rate;
}

rateList.prototype.add5 = function () {
  this.rate += 5;
  console.log(`new rate is ${this.rate}`);
};

const tea = new rateList("tea", 10);

tea.add5();
console.log(tea.prototype);

// prototypes

// JS has a prototypal behaviour - layer to layer check -
// parent -> grand parent -> great grand parent -> ... -> Object -> Null
// Array -> Object -> Null
// String -> Object -> null
// function is also an object

function abc() {
  return true;
}

console.log(abc instanceof Object);

// classes
// instances (new, this)

// 4 pillar of OOP
// polymorphism
// inheritance
// abstraction
// encapsulation
