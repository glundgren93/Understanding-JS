/* Variable Scope and Closures

The term scope has various meanings:
  - the value of the 'this' binding.
  - the execution context defined by the value of the 'this' binding.
  - the lifetime of a variable.
  - the variable value resolution scheme, or the lexical binding.

*/

// Helpers

function average(array) {
  var sum = _.reduce(array, function(a, b) { return a+b; });
  return sum / _.size(array);
}

/* Global Scope

 Any variable declared in JavaScript without the var keyword is created in the global scope
 It is accessible to every function and method in our program.
 Variables in JavaScript are mutable by default. Any piece of code can change their property values.

*/
aGlobalvar = 'i am a global variable';

_.map(_.range(2), function() {
  return aGlobalvar;
}); // ["i am a global variable", "i am a global variable"]


/* Lexical Scope

  Refers to the visibility of a variable and its value in nested functions
  The lexical scope looks for the innermost variable inside the nested functions.
  Every inner level can access its outer levels. If it doesn't find the variable
  inside the first level, it goes up the chain until the variable is found.
*/

lexicalVariable = 'outer';

function fn() {
  var lexicalVariable = "middle";

  return _.map([1, 2, 3], function(e) {
    var lexicalVariable = 'in';

    return [lexicalVariable, e].join(' ');
  });
}

fn(); // ['in 1', 'in 2', 'in 3']


/* Closures

  A function that captures the external bindings contained in the scope
  in which it was defined for later use.

*/

// Closure returning local variable
function whatWasTheVariable() {
  var variable = 'i am a variable'; // Captured by closure

  return function() {
    return "The variable was: " + variable;
  };
}

var reportVariable = whatWasTheVariable();
reportVariable(); // The variable was: i am a variable

// The variable factor is retained within the body of the return function
// and is accessible anytime the function is called.
// Each new function retains its own UNIQUE instance of the variable factor.
function scaleFunction(factor /*captured by closure*/ ) {
  return function(array) {
    return _.map(array, function(x) {
      return (x * factor);
    });
  };
}

var scale5 = scaleFunction(5);
scale5([1, 2, 3]); // [5, 10, 15]

// Closure retaining another function
function avgDamp(fn /*captured by closure*/) {
    return function(n, x) {
      return average([n, x, fn(n, x)]);
    };
}

var avgSum = avgDamp(function(n, x) { return n + x; });

avgSum(10, 5); // 10
