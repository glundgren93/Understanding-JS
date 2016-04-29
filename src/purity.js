/* Purity

 One way of reducing the complexity of softwares is reducing or
 eliminating state change in our programs.

 A pure function contains the following properties:
  - Its result is calculated only from the values of its arguments.
  - It cannot rely on data that changes external to is control.
  - It cannot change the state of something external to its body.

Given the same arguments, pure functions always return the same output.

Pure functions are important for:
 - Functional programming
 - Concurrency
 - Writing testable code
 - Having predictable code

It's ok for a pure function to mutate some local data in order to produce an
immutable return value.

*/

function skipTake(n, coll) {
  var ret = [];
  var sz = _.size(coll);

  for(var i = 0; i < sz; i += n) {
    // mutate ret array (local data)
    ret.push(coll[i]);
  }

  return ret;
}

skipTake(2, [1, 2, 3, 4, 5])
