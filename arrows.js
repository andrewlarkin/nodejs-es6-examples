'use strict';
/**
	Arrow Functions: =>
**/

// Scoping in JavaScript can be a pain.  In ES3/5, we had to assign a variable to keep track of our context:
function OldContectExample() {
  var self = this;

  this.foo = 'bar';

  setTimeout(function () {
    console.log('This will be undefined (defining "self") ->', this.foo);

    console.log('This will be "bar" (defining "self") ->', self.foo);
  }, 100);
}

// In ES5, we were given bind(), which allowed us to set the context of a function:
function BindContextExample() {
  this.foo = 'bar';

  setTimeout(function () {
    console.log('This will be "bar" (using bind) ->', this.foo);
  }.bind(this), 100);
}
function bind_context() {

}

// In ES6, we're introduced to the arrow function, which shorthands the bound function delcaration:
function ArrowFunctionExample() {
  this.foo = 'bar';

  setTimeout(() => {
    console.log('This is supposed to be "bar" (using arrow functions) ->', this.foo); // Alas, it is not (yet).  It is still a handy shorthand.
  }, 100);
}

var a = new OldContectExample();
var b = new BindContextExample();
var c = new ArrowFunctionExample();