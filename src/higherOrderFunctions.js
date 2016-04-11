/* Higher-Order-Functions

  Functions that take a function as an argument or return a function as a result.

  In JavaScript it is often overkill to create functions that take more than one
  function in their arguments. However, there are cases where it is justified to do so.

*/

// Function that repeats a VALUE a number of times.
function repeat(times, value) {
  return _.map(_.range(times), function() {
    return value;
  });
}

repeat(4, "major"); // ["major", "major", "major", "major"]

// Function that repeats a COMPUTATION a number of times
// By taking a function instead of a value, this function is now
// open to a world of possibilities.
function repeatedly(times, fun) {
  return _.map(_.range(times), fun);
}

repeatedly(2, function() {
  return Math.floor((Math.random() * 10) + 1);
});

// Function that repeats a COMPUTATION until its return value
// crosses some threshold and so on.
function iterateUntil(fn, check, init) {
  var ret = [];
  var result = fn(init);

  while (check(result)) {
    ret.push(result);
    result = fn(result);
  }

  return ret;
}

iterateUntil(function(n) {
  return n * 2;
}, function(n) {
  return n < 64;
}, 2); // [4, 8, 16, 32]

/*
  When you use a closure that mutates a bit of internal code, you cannot necessarily
  replace any call to the function without breaking your program, because the value that
  the closure returns is dependent on the number of times that it was called.
*/
