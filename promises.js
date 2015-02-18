'use strict';

/**
  Promises
**/


// Traditionally, JavaScript would have us live in "callback hell".  Let's say I have three things I want to happen in sequence, asynchronously:
function callback_hell() {
  function first(value, cb) {
    setTimeout(function() {
      value+=1;
      console.log('First I want to add 1 to my value ->', value);
      cb(value);
    }, 100);
  }

  function second(value, cb) {
    setTimeout(function() {
      value*=2;
      console.log('Then I want to multiply my value by 2 ->', value);
      cb(value);
    }, 100);
  }

  first(1, function (value) {
    second(value, function(val) {
      val-=2;
      console.log('Finally I get to my last callback, where I subtract 2 ->', val);
    });
  });

  // This can get pretty messy.  For one, we have scoping concerns.  Second, we have the nasty callback tree starting.
}


// Promises can make handling asynchronous functionality a lot easier.
function promises_promises() {
  function first(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        value+=1;
        console.log('Again, I want to add 1 to the value ->', value);
        resolve(value); // Note that I'm resolving with the new value
      }, 300); 
    });
  }

  function second(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        value*=2;
        console.log('Then I want to multiply my value by 2 ->', value);
        resolve(value);
      }, 100);
    });
  }

  first(1).then(second).then((value) => {
    value-=2;
    console.log('Finally I get to my last callback, where I subtract 2 ->', value);
  });
}

// Note that we can also catch errors and reject the promise, if need be:
function reject_promise() {
  var p1 = new Promise((resolve, reject) => {
    reject('This is meant to be rejected');
  });

  p1.then(function () {
    console.log("We're not going to get here.");
  }).catch(function (err) {
    console.log(err);
  });
}

// Lastly, we can handle things in parallel using the Promise.all method:
function parallel_promise() {
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('a');
    }, 500);
  });

  var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('b');
    }, 1000);
  });

  var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('c');
    }, 100);
  });

  Promise.all([p1, p2, p3]).then((values) => console.log('This should be [a, b, c] ->', values));
}

callback_hell();
promises_promises();
reject_promise();
parallel_promise();