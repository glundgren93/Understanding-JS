/* Recursion

  Functions calling themselves directly or through other functions.

  - Recursive solutions involve the use of a single abstraction applied to subsets
  of a common problem.
  - Recursion can hide mutable state.
  - Recursion is on way to implement laziness and infinitely large structures.

  If you think about the nature of a function, myLength, that takes an array and
  returns its length, you might have this:
    1. Start with a size of zero.
    2. Loop through the array, adding one for each entry.
    3. When it gets to the end, the size will be the length.

  A recursive description of this function would be as follows:
    1. An array's length is zero if its empty.
    2. Add one to the result of myLength with the remainder of the array.
*/

function myLength(ary) {
  if (_.isEmpty(ary))
    return 0;
  else
    return 1 + myLength(_.rest(ary));
}

console.log(myLength(_.range(2)));

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};
countdown(10);
