/* Reflection

  A JavaScript object has the ability to look at its own properties and methods.
  Useful for Extend pattern implementation.

*/
var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}
var john = {
    firstname: 'John',
    lastname: 'Doe'
  }
  // pass person to john's prototype
john.__proto__ = person;

// grabs every property and method of JOHN and on JOHN's prototype
for (var prop in john) {
  console.log(prop + ': ' + john[prop]);
}

// grabs every property that object JOHN contains
for (var prop in john) {
  if (john.hasOwnProperty(prop))
    console.log(prop + ': ' + john[prop]);
}
