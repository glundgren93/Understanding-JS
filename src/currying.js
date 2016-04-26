/* Currying

  A curried function is one that returns a new function
  for every logical argument that it takes.

  "Currying is when you break down a function that takes multiple arguments
  into a series of functions that take part of the arguments." http://goo.gl/qQcHxA

*/

// This function takes two arguments and returns their sum
function add(a, b) {
    return a + b;
}

add(5, 6); // 11

// This is the curried version of the function above.
// It takes one argument and returns a function that takes another argument
// and that function returns their sum.
function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}

var add5 = curriedAdd(5);
add5(6); // 11

function leftCurryDiv(n) {
    return function(d) {
        return n / d;
    };
}

function rightCurryDiv(d) {
    return function(n) {
        return n / d;
    };
}

var divide10Left = leftCurryDiv(10);
divide10Left(2); // 5

var divide10Right = rightCurryDiv(10);
divide10Right(2); // 0.2

function curry(fn) {
    return function(arg) {
        return fn(arg);
    };
}
var alertCurry = curry(alert);

function curry2(fun) {
    return function(secondArg) {
        return function(firstArg) {
            return fun(firstArg, secondArg);
        };
    };
}

function divide(n, d) {
    return n / d;
}

var div4 = curry2(divide)(10);

div4(40); // 4


/*
  Partial Application
  Function that is "partially" executed and is ready for immediate execution given
  the remainder of its expected arguments.
*/

// The function returned from partial1 captures the arg1 from the original call
// and puts it at the front of the arglist of the executing call.
function partial1(fun, arg1) {
    return function() {
        var args = construct(arg1, arguments);
        return fun.apply(fun, args);
    }
}

var over10Part1 = partial1(divide, 10);
over10Part1(5, 2); // 2
