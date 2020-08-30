---
title: "JS Async: Promises"
date: "2020-08-27"
category: posts
lang: en
---

This post is the second in a series of 3 posts to explain and show how to work with asynchronous data in JavaScript.

In this article I will focus on Promises and how we can use them, what are the rules and some examples to see in practice how they work.

_if you haven't checked out the first article in this series on JS Async where I talk about callbacks and how they work [just access here.](https://www.felipesousa.space/posts/en/javascript-async-callbacks)_

# What are Promises?

Promises are a native JavaScript implementation to more elegantly and simply handle asynchronous data.

Just like promises in the real world, promises in JavaScript can or not happen, technically we can say that we have control of the moment of _success_ and _error_ of the flows we are dealing with, but you can think, _"but I also already have this possibility of handler with callbacks"_, and yes you can handler your errors using callbacks too, but imagine being able to compose, pipe your operarations and also get errors in a more elegant and literally more declarative way, that's just a little bit of what Promises can do.

## Creating a Promise

The promises have 2 stages, creation and consume. Let's check the basics to create a new promise:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  // do something
  if (true) {
    // ...
    resolve(); // resolving the promise;
  } else {
    reject(); // rejecting the promise;
  }
});
```

Here we're creating a new Promise instance that receive a function as a parameter, this function accept 2 methods: `resolve` and `reject`, the **resolve** method which is responsible for capturing the success value and **reject** which captures the error if it exists.

Now let's create a new function that returns a fake payload 5 seconds and embrace it using the Promises.

```javascript
function handlerPromise(resolve, reject) {
  setTimeout(function () {
    let data = { name: "felipe" };
    resolve(data);
  }, 5000);
}

const myPromise = new Promise(handlerPromise);
```

<br />

The `handlerPromise` function call the `resolve` method after 5 seconds exporting the variable `data` as a Promise's payload.

## Consuming a Promise

To capture the success values of a promise we use the `.then` method, it can take up to 2 functions as parameters, the first one capturing the result exported by **resolve** methods and the second capturing errors exported by **reject** method. Therefore, not only for success stories but optionally the `.then` method can also handle error data.

```javascript
myPromise.then(
  function (payload) {
    console.log(`My name is ${payload.name}.`);
  },
  function (error) {
    console.log("oooppps, something wrong happen.");
  }
);
```

Try changing the `handlerPromise` function by calling **reject** instead of **resolve** so you can see how error cases work.

An alternative way to catch the error when executing a promise is to use the `.catch` method, which in turn accepts a function that receives the error triggered as a parameter:

```javascript
myPromise.catch(function (error) {
  console.log("ooops, something went wrong");
});
```

Something important and super practical when working with promises is that the `.then` method when it returns some value, that value is also a promise, which means that you can chain together several `.then` to handle the values as pipelines.

Imagine the same example as before, but now in each step of execution we have to modify the initial payload:

```javascript
myPromise
  .then(function (payload) {
    return { ...payload, age: 22 };
  })
  .then(function (payload) {
    return { ...payload, role: "developer" };
  })
  .then(function (payload) {
    console.log(payload);
    // { name: 'felipe', age: 22, role: 'developer' }
  })
  .catch(function (error) {
    console.log(error);
  });
```

Within our first `.then` I'm adding the **age** property, in the second the **role** property within the original payload, while our third pipeline receives the payload changed according to the previous pipes. It is important to remember that **only** the `.then` continues the flow after a `return`, the `.catch` after being executed ends the process.

In addition to the pipelines to treat cases of success and error, the promises also have a method that is always executed, even after an error, this method is `.finally`, it also takes a function as a parameter and can be used in some interesting cases to avoid duplication of code, execute a function or trigger an event that removes a loading from a user's screen, for example.

```javascript
myPromise
  .then(...)
  .catch(...)
  .finally(function () {
    // always executed
  })
```

<br />

## Composition

Promises also have 2 methods that help us work with asynchronous processes in parallel, they are `Promise.all()` and `Promise.race()`. Both methods receive an array of items and work as follows:

- **Promise.all()**: Returns a promise with the results array after all the iterables in the list are completed. Returns an error if any of the items are rejected/fail.

- **Promise.race()**: Returns a promise when the first iterable is resolved/rejected.

In the examples below we will use 2 similar promises, one executed in `200ms` and the other in`400ms`, as a result they bring **"200"** and **"400"** respectively.

```javascript
const first = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("200");
  }, 200);
});

const second = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("400");
  }, 400);
});
```

<br />

Example of how **_Promise.all()_** works:

```javascript
Promise.all([first, second]).then(function (payload) {
  console.log(data); // ['200', '400'];
});
```

<br />

Example of how **_Promise.race()_** works:

```javascript
Promise.race([first, second]).then(function (payload) {
  console.log(data); // '200';
});
```

With this type of functionality, some managements that previously would require a few lines of code, can be encapsulated inside a few pipelines.

It is important to remember that even before the Promises are implemented natively in JavaScript, some libraries such as [q.JS](https://github.com/kriskowal/q) and [when.JS](https://github.com/whosejs/when) already came with this concept of similarity and applicability.

Thank you very much for reading, in the next post of this series I will talk about working with asynchronous processes using _async/await_!

I hope you enjoyed, see you next time!

🦐
