// Object.getOwnPropertyDescriptor(obj, propertyName)

/*
Returns an object describing the property’s attributes:
value → The actual value of the property.
writable → true if the property can be modified.
enumerable → true if the property appears in for...in loops or Object.keys().
configurable → true if the property descriptor can be changed or deleted.
get & set → Functions if the property is an accessor (getter/setter).
*/

/*
example of how to set a property that have non default attributes 
const person = {};
Object.defineProperty(person, "id", {
    value: 101,
    writable: false,
    enumerable: false,
    configurable: false
});
*/

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const obj = {};

Object.defineProperty(obj, "name", {
  value: "ashish",
  writeable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
