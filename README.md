# Functional-JS
This repository is meant for study purposes only. Most of the code of it will come from the book "Functional JavaScript by Michael Fogus (O'Reilly). Copyright 2013 Michael Fogus, 978-1-449-36072-6."

# What is Functional Programming?
  "Functional programming is the use of functions that transform values into units of abstraction, subsequently used to build software systems."

# Why Functional Programming matters?
  "The major evolution that is still going on for me is towards a more functional programming style, which involves unlearning a lot of old habits, and backing away from some OOP directions." - John Carmack

## Table of Contents
- [JavaScript's Multiple Paradigms](#javascripts-multiple-paradigms)
- [First Class Functions](#first-class-functions)

## JavaScripts Multiple Paradigms
  JavaScript is not strictly a functional programming language, instead it facilitates the use of other paradigms as well:

### Imperative programming

```
- Categorized by its attention no details.
- Built around direct manipulation and inspection of program state.
- Often restricted to a level of detail that is good for their compilers rather than for their programmers. (Sokolowski 1991).

```
> This implementation describes a "99 Bottles of Beer" program and exactly a "99 Bottles of Beer" program.
Imperative programs are often one-shot implementations and difficult to reuse.

```javascript
  var lyrics = [];

  for (var bottles = 99; bottles > 0; bottles--) {
      lyrics.push(bottles + " bottles of beer on the wall");
      lyrics.push(bottles + " bottles of beer");
      lyrics.push("Take one down, pass it around");

      if (bottles > 1)
        lyrics.push((bottles - 1) + " bottles of beer on the wall.");
      else
        lyrics.push("No more bottles of beer on the wall!");
  }
```

### Prototype-based object-oriented programming

Every object has a secret link to the object which created it, forming a chain. When an object is asked for a property that it does not have, its parent object is asked... continually up the chain until the property is found or until the root object is reached.

Each function in JavaScript (which are objects themselves) actually has a member called "prototype", which is responsible for providing values when an object is asked for them. Having this member allows the constructor mechanism to work. Adding a property to the prototype of a function object will make it available to the constructed object, as well as to all of the objects which inherit from it. ( http://stackoverflow.com/a/186279/1810241)

<sup>[(back to table of contents)](#table-of-contents)</sup>

## First Class Functions

  First Class Functions are functions that can go anywhere that any other value can go.
  - A function can be stored in a variable.
      ```javascript
        var hello = function() { return 'hello'; };

        hello(); // hello
      ```

  - A function can be stored in an array slot.
      ```javascript
        var hellos = ['hello', function() { return 'hello'; }];

        hellos[1](); // hello;
      ```

  - A function can be stored in an object field.
      ```javascript
        var hellos = {word: 'hello', fn: function() { return 'hello'; }};

        hellos.fn(); // hello;
      ```

  - A function can be created as needed.
      ```javascript
        (function() { return 'hello '; })() + 'world'; // hello world
      ```

  - A function can be passed to a function.
      ```javascript
        function sayHello(fn, msg) { return fn() + msg; }

        sayHello(function() { return 'hello '; }, 'world'); // hello world
      ```

  - A function can be returned from a function.
      ```javascript
        function sayHello() { return function() { return 'hello'; }}

        var greeting = sayHello();
        greeting(); // hello
      ```

<sup>[(back to table of contents)](#table-of-contents)</sup>
