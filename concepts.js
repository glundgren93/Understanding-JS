// All functions have access to the apply method.
// This method allows you to call the function with an array.
// The array would be the argument to the function itself.

function splat(fn) {
  return function(array) {
    // The elements of the array will be passed as arguments to fn
    return fn.apply(null, array);
  };
}

var addElements = splat(function(x, y, z) {
  return x + y + z;
});

console.log(addElements([1, 2, 3]));

// Any function may be called with any number of arguments of any type
function unsplat(fn) {
  // Although this function doesn't explicitly have arguments, it can receive as many arguments as you wish
  return function() {
    // All functions have access to arguments property,
    // that is an array-like structure holding the values that the function was called with.
    return fn.call(null, _.toArray(arguments));
  };
}

/* First Class Functions are functions that can go anywhere that any other value can go.
 A function can be stored in a variable.
 A function can be stored in an array slot.
 A function can be stored in an object field.
 A function can be created as needed.
 A function can be passed to a function.
 A function can be returned from a function. */
