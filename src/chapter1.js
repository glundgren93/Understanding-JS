// We could have implemented each of this inside our own Functions
// But if we wanted to modify the way they are presented, we would have to change each lines therein.
// A better approach is to 'abstract' the notion of errors, informations and warnings into functions.
function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log(['WARNING:', thing].join(' '));
}

function note(thing) {
  console.log(['NOTE:', thing].join(' '));
}

// Determines if something is an indexed data type
function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

// Looks up a value in an array by index
function nth(array, index) {
  if (!_.isNumber(index))
    fail('Expected a number as the index');
  if (!isIndexed(array))
    fail('Not supported on non-indexed type');
  if ((index < 0) || (index > array.length - 1))
    fail('Index out of bounds');

  return array[index];
}

var letters = ['a', 'b', 'c', 'd'];

console.log(nth(letters, 2));

function second(array) {
  return nth(array, 1);
}

var peopleTable = [
  ['name', 'age', 'hair'],
  ['Merble', '35', 'red'],
  ['Bob', '65', 'blonde']
];

// Returns everything but the first entry of the array and produces a new array consisted of the first elements of each item in table
// In this case the result will be 'Merble' and 'Bob'
function selectNames(table) {
  return _.rest(_.map(table, _.first));
}
// Returns everything but the first entry of the array and produces a new array consisted of the second elements of each item in table
// In this case the result will be 35 and 65
function selectAges(table) {
  return _.rest(_.map(table, second));
}

function executeIfHasField(target, name) {
  // Checks if target contains the 'name' key
  return doWhen(existy(target[name]), function() {
    var result = _.result(target, name);
    console.log(['The result is', result].join(' '));
    return result;
  });
}

// Definition of an abstraction for "existence" in the guise of a function
function existy(x) {
  return x !== null;
}
// The definition of an abstraction for "truthiness" built from existing functions
function truthy(x) {
  return (x !== false) && existy(x);
}

function doWhen(conditional, action) {
  if (truthy(conditional))
    return action();
  else
    return undefined;
}

// The use of said functions by other functions via parameter
// passing to achieve some behavior
console.log([null, undefined, 1, 2, false].map(existy));
console.log([null, undefined, 1, 2, false].map(truthy));

executeIfHasField([1, 2, 3], 'reverse'); // The result is 3, 2, 1
executeIfHasField({
  foo: 42
}, 'foo'); // The result is foo
