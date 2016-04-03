/* Building Objects */

/* 'new' creates a new empty object and then invokes the function every time new is used,
 the 'this' variable is set to the empty object that was created.

 Every function you create in JavaScript gets the '.prototype' property.
 It starts it's life as an empty object and you can add onto it.

 The new object gets access to the prototype of the function constructor used.
 We could add methods to the function constructor itself,
 but it would take a lot of memory space, since every function is an object
 and a object creates a new space in memory.
 */

// Function Constructor
function Car(wheel, engine) {

  this.wheel = wheel;
  this.engine = engine;

}

// If we end up using 500 Car Objects, we'll have 500 'start' methods.
// If we add it to the prototype, we'll only have it once.
Car.prototype.start = function() {
  return "The car has started. It has " + this.engine + " engine and " + this.wheel + " wheels";
}

var punto = new Car(4, 1);

var celta = new Car(2, 1);

// Searches for start method on Car object. Does not find, so it goes up the prototype chain
// Since we've added the start method to car's prototype on line 16, it will find it and it will return it.
console.log(celta.start());
console.log(punto.start());



function identifyf(x) {
  return function() {
    return x;
  }
}

function addf(x) {
  return function(y) {
    return x + y;
  }
}

function applyf(add) {
  return function(x) {
    return function(y) {
      return add(x, y);
    }
  }
}
