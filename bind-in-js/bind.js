// bind

// used to create new function with a specified this value and optional argument
// The bind() method does not execute the function immediately; it returns a new function with a fixed this value.

class Button {
  constructor(lable) {
    this.lable = lable;
  }

  greet() {
    console.log(`button clicked ${this.lable}`);
    console.log(this);
  }
}

const btn = new Button("submit");
// btn.greet();
document.getElementById("btn").addEventListener("click", btn.greet);
// button clicked undefined    bind.js:13
// <button id=​"btn">​click me​</button>​
// this is refering to DOM element and not Button instance
// hence use bind

document.getElementById("btn").addEventListener("click", btn.greet.bind(btn));
// button clicked submit
// Button {lable: 'submit'}
// after using bind we can see that this is now refering to the class (btn) instance and not the DOM element button
