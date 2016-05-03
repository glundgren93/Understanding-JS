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


/*
 Object#freeze will cause all subsequent mutations to fail
 The problem of freeze is that it is shallow, which means that
 a freeze will only happen at the topmost level and will not
 traverse nested objects.
 */
var a = [1, 2, 3];

a[1] = 42;
a; // 42

Object.freeze(a);

a[1] = 100;
a; // 42


function Point(x, y) {
  this._x = x;
  this._y = y;
}

// Methods used as "modifiers", because nothing is actually modified, as they return
// fresh instance of Point.
Point.prototype = {
  withX: function(val) {
    return new Point(val, this._y);
  },
  withY: function(val) {
    return new Point(this._x, val);
  }
};

var p = new Point(0, 1);

p.withX(1000); // {_x: 1000, _y: 1 }
p; // {_x: 0, _y: 1 }
