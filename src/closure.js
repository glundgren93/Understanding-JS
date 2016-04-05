/* Variable Scope and Closures

The term scope has various meanings:
  - the value of the 'this' binding.
  - the execution context defined by the value of the 'this' binding.
  - the lifetime of a variable.
  - the variable value resolution scheme, or the lexical binding.

*/

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

  return _.map([1,2,3], function(e) {
    var lexicalVariable = 'in';

    return [lexicalVariable, e].join(' ');
  });
}

fn(); // ['in 1', 'in 2', 'in 3']


/* Closures

  A function that captures the external bindings contained in the scope
  in which it was defined for later use.

*/
