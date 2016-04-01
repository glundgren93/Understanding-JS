# Functional-JS
This repository is meant for study purposes only. Most of the code of it will come from the book "Functional JavaScript by Michael Fogus (O'Reilly). Copyright 2013 Michael Fogus, 978-1-449-36072-6."

# What is Functional Programming?
  "Functional programming is the use of functions that transform values into units of abstraction, subsequently used to build software systems."

# Why Functional Programming matters?
  "The major evolution that is still going on for me is towards a more functional programming style, which involves unlearning a lot of old habits, and backing away from some OOP directions." - John Carmack

## Table of Contents
- [First Class Functions](#first-class-functions)
- [JavaScript's Multiple Paradigms](#javascripts-multiple-paradigms)

## First Class Functions

  First Class Functions are functions that can go anywhere that any other value can go.
  - A function can be stored in a variable.
  - A function can be stored in an array slot.
  - A function can be stored in an object field.
  - A function can be created as needed.
  - A function can be passed to a function.
  - A function can be returned from a function.

  High-order functions can do one or both of the following:
  - Take a function as an argument.
  - Return a function as result.

<sup>[(back to table of contents)](#table-of-contents)</sup>

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

### Metaprogramming

<sup>[(back to table of contents)](#table-of-contents)</sup>
