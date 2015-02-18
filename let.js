'use strict'; // <- Note: you're going to need this.

/**
  let
**/

// let is a new way of declaring variables.  It can be describes as the "new" var...
function let_is_var() {
  let a = "foo";

  console.log("This will be 'foo' -> ", a);

  // ...and it behaves a lot like var...
  let b = "bar",
    c = "baz",
    d = "boz";

  console.log("This will be 'bar bas boz' -> ", b, c, d);

  // ...including the ability to hoist the variable yourself.
  let e;

  function test() {
    e = "bag";
  }

  test();

  console.log("This will be 'bag' -> ", e);
}

// However, let has a few new tricks.  Specifically, let is block scoped.
function let_block_scope() {
  var a = 12;

  if (true) {
    var a = 24; // This is the same variable.
    console.log("This will be 24 -> ", a);
  }

  console.log("This will be 24 -> ", a);

  let b = 12;

  if (true) {
    let b = 24; // This is a completely different variable!
    console.log("This will be 24 -> ", b);
  }

  console.log("This will be 12 -> ", b);
}

// This is rather helpful for iterations:
function let_iterations() {
  for (var a = 0; a < 5; a+=1) {

    var b = a + 1;

    setTimeout(function () {
      console.log('These values are the same ->', b); // Because b is scoped to the outer function block...
    }, 100);
  }

  for (var c = 0; c < 5; c+=1) {

    let d = c + 1;

    setTimeout(function () {
      console.log('These values are not the same ->', d); // ...but d is scoped to the block of each iteration!
    }, 100);
  }
}

// I mentioned hoisting above.  Unlike var, EcmaScript6 will not hoist the variable to the top of the function block:
function let_hoisting() {
  console.log("This variable was hoisted ->", a);
  var a = 'foo';

  try {
    console.log(b);
    let b = 'foo';
  } catch (e) {
    console.log("In this case, we throw a ReferenceError ->", e);
  }
}

// An interesting quirk of let has to do with repeat declarations:
function let_repeat_delcarations() {
  var a;
  var a;
  console.log("No problems yet...");

  // But if we try to do it with let?  Boom, SyntaxError.
}

let_is_var();
let_block_scope();
let_iterations();
let_hoisting();