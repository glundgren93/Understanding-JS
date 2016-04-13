/* Functions Building Functions

  Polymorphic JavaScript functions:
  - Make sure the target exists
  - Check if there is a native version and use it if there is
  - If there isn't a native version, do some task implementing the behavior:
    - type-specific tasks.
    - argument-specific tasks.
    - count-specific tasks.

  This pattern is expressed in the implementation of Underscore's _.map function.

  The essence of functional composition is to use existing parts in well-known
  ways to build up new behaviors that can serve as behaviors themselves.
*/

// Returns a function that loops through an array of functions
// calls each function with an object and returns the first
// actual value it finds.
function dispatch() {
  var funs = _.toArray(arguments);
  var size = funs.length;

  return function(target) {
    var ret;
    var args = _.rest(arguments);

    // functions loop
    for (var funIndex = 0; funIndex < size; funIndex++) {
      var fun = funs[funIndex];
      // calls function with an object
      ret = fun.apply(fun, construct(target, args));

      // if function returned an actual value, return it.
      if (existy(ret))
        return ret;
    }

    return ret;
  };
}

// Switch statement function
function performCommand(command) {
  var result;

  switch (command.type) {
    case 'notify':
      result = 'notify ' + command.message;
      break;
    case 'join':
      result = 'join ' + command.target;
      break;
    default:
      console.log(command);
  }
  return result;
}

performCommand({
  type: 'notify',
  message: 'hi!'
});

// This function can serve as a switch statement
// It receives a type string and an action function
// The returned function receives an object
// if object.type is equal to the type than
// it will call the action function
function isa(type, action) {
  return function(obj) {
    if (type === obj.type)
      return action(obj);
  };
}

// Calls dispatch with 3 functions as arguments.
// When this function gets called with an object,
// if one of its arguments return a value then it will get executed.
var performCMD = dispatch(
  isa('notify', function(obj) {
    return obj.message;
  }),
  isa('join', function(obj) {
    return obj.target;
  }),
  function(obj) {
    console.log(obj.type);
  }
);

// Call function passing object
// since the function's arguments do not expect an object with type 'delete'
// it will print 'delete'.
performCMD({
  type: 'delete',
  message: 'i am a delete object'
});

// Call function passing object
// since the function's arguments expect an object with type 'notify'
// it will print the message of the object and it will also return it.
performCMD({
  type: 'notify',
  message: 'i am a notify object'
});

// Calls dispatch with 2 functions as arguments.
// When this function gets called with an object,
// if one of its arguments return a value then it will get executed.
var performAdminCmd = dispatch(
  isa('kill', function(obj) {
    return obj.hostname;
  }),
  performCMD
);

// Call function passing object
// since the function's arguments do not expect an object with type 'flail'
// it will print 'flail'.
performAdminCmd({
  type: 'flail',
  hostname: 'localhost'
});
