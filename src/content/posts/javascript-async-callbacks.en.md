---
title: "JS Async: Callbacks"
date: "2020-08-18"
category: posts
lang: en
---

Asynchronous patterns are part of everyday life, can be a timer, reading a file or making a request, etc., at some point, you will need to manipulate this pattern and it is very important to know how to work with them and which strategy is best for each one of the cases that may happen.

This post is the first in a series of 3 posts to explain how to work with asynchronous patterns in JavaScript. In this article, I will focus on Callbacks and how we can use them, what are the rules, and some examples to see in practice how it works.

_If you have questions about what asynchronous functions are, how they work, and/or why they exist, [recommend reading this article](https://nodejs.dev/learn/the-nodejs-event-loop) which explains well how calls and functions work within JavaScript._

# Callbacks

Also known as the oldest way to handle asynchronous data, callbacks allow us to inject a function into an asynchronous execution so that we can control the result(s) when they are available. In a very indirect way, it's as if we're sending a "spy" who will inform us when something happens within the call we are executing.

We'll create a simple example to get started, a function that returns a `new Date()`:

```javascript
function getNewDate() {
  return new Date();
}

const result = getNewDate();

console.log(result);
```

In this case, we save the result value in the variable _**result**_, print it on the screen and everything works as expected, but if this information happens to be within a call to an endpoint, timer, or some other execution that is not immediate, what happens?

Let's simulate the same case, but now the `getNewDate` function will only return the value after 4 seconds:

```javascript
function getNewDate() {
  setTimeout(function () {
    return new Date();
  }, 4000);
}

const result = getNewDate();

console.log(result); // undefined
```

When executed, we receive **undefined** as a result of the variable _result_. This is because the value returned by the `getNewDate` function is executed 4 seconds later, and our `result` variable expects the value at execution time, that is, we have to get this value **ONLY** when it is available, in case otherwise we will not be able to manipulate or store this value.

The solution for this case is quite simple, let's pass a function that is outside the scope of the `getNewDate` function to receive the real value that we want to manipulate, in this case, `new Date ()`.

```javascript
function getNewDate(callback) {
  setTimeout(function () {
    callback(new Date());
  }, 4000);
}

function getPayload(payload) {
  console.log(`The date is: ${payload}`);
}

getNewDate(getPayload);
```

To manipulate the result data of the `getNewDate` function, I created a function called`getPayload`, this is sent as a parameter to our main function that instead of returning the value as before, now executes the callback function passing the value of result as a parameter, like this the `getPayload` function is executed _only_ when the value is available to be captured, simulating a" wait "within the execution. The function `getPayload` in turn only receives the _payload_ that contains the result of the execution and prints on the screen: 🥳.

Callbacks are just the starting point, in the next article in this series we'll see how to work using Promises which, in addition to a better interface, has a couple of API's to better handle our asynchronous cases.

See you at the next one!

🐊
