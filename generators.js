'use strict';

/**
  Generators
**/

// Generator are functions that can be entered, exited, and re-entered later.  A generator function (designated by the *) returns a generator:
function simple_generator() {
  function *iterate() {
    for (let i = 1; i <= 5; i+=1) {
      yield i;
    }
  }

  var gen = iterate();

  console.log('This is {value: 1, done: false} ->', gen.next());
  console.log('This is {value: 2, done: false} ->', gen.next());
  console.log('This is {value: 3, done: false} ->', gen.next());
  console.log('This is {value: 4, done: false} ->', gen.next());
  console.log('This is {value: 5, done: false} ->', gen.next());
  console.log('This is {value: undefined, done: true} ->', gen.next());
}

// Generators are iteratable:
function iterable_genearator() {
  function *iterate() {
    for (let i = 1; i <= 5; i+=1) {
      yield i;
    }
  }

  var gen = iterate();

  for (let i of gen) {
    console.log('Each value of gen is displayed, 1 to 5 ->', i);
  }
}

// We can also yield generators:
function yielding_generators() {
  function *iterate(i) {
    for (; i <= 5; i+=1) {
      yield i;
    }
  }

  function *add_then_iterate(i) {
    yield i+=1;
    yield* iterate(i);
    yield i + 10;
  }

  var gen = add_then_iterate(1);

  for (let i of gen) {
    console.log('Each value of gen is displayed, starting at 2, going from 2 to 5, then ending with 12 ->', i);
  }
}

// We can also yield promises using co:
function yielding_promises() {
  function asyncPromise(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 500);
    });
  } 

  function *yieldPromise() {
    var result = yield asyncPromise('foo');

    return result; // Note that you can return from generators
  }

  var co = require('co');

  co(function *() {
    var result = yield yieldPromise();

    console.log('This should be foo ->', result);
  });
}

simple_generator();
iterable_genearator();
yielding_generators();
yielding_promises();