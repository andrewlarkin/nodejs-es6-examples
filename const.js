'use strict';

/**
  const
**/

// const also behaves a lot like var, with one major exception...
function const_is_const() {
  const a = 20;

  a = 10; // This will fail.

  var a = 10; // Also going to fail.

  // Any attempt to reasign to a const will result in a syntax error.

  // It works for objects, too...
  const myObject = { foo: 'bar' };

  // ... but not the variables in that object.
  myObject.foo = 'baz'; // Won't fail.

}
