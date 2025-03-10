// how is for loop different from forEach() lop

// forEach loop has individual scope for each item
// for loop dont have individual scope for each item

//When using the .forEach() you pass an individual function with it’s own scope. In a for loop you’re polluting whatever scope you place the loop in.

// Each() is a generic tool… only use it when you can’t use a more specialized tool.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

for (let i = 0; i <= arr.length; i++) {
  count++;
  console.log(count);
}
