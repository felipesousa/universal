---
title: "JS Async: async/await"
date: "2020-08-31"
category: posts
lang: en
---

This post is the last of the JS Async series, 3 posts to explain and show how to work with asynchronous data in JavaScript.

You can check out the other 2 previous articles:

- <a href="https://www.felipesousa.space/posts/en/javascript-async-promises" target="_blank">JS Async: Promises</a>
- <a href="https://www.felipesousa.space/posts/en/javascript-async-callbacks" target="_blank">JS Async: Callbacks</a>

Today we’ll talk about `async/await` and see some examples of how and what we can do with it:

## Async

The keyword _async_ was implemented in ES2017. It makes it possible to create naturally asynchronous functions using the following notation:

```javascript
async function myAsyncFunction() {}
```

Something important and even more interesting about this implementation is that every `async` function returns a <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a>, meaning that we can use all the interfaces we already know in the <a href="https://www.felipesousa.space/posts/pt/javascript-async-promises" target="_blank">article about promises</a>. Let's look at an example to better understand:

```javascript
async function myAsyncFunction() {
  return "Hello!";
}

myAsyncFunction().then(payload => {
  console.log(payload); // Hello!
});
```

The `async` functions use the success values as the values that will be arranged within the`.then` pipeline in the promise that will be returned, in case you need to export an error, it is necessary to trigger an error within the scope of execution to be sent to the `.catch` pipeline, let's see an example:

```javascript
async function myAsyncFunctionWithError() {
  throw "something wrong happen";
}

myAsyncFunctionWithError().catch(error => {
  console.log(error); // something wrong happen
});
```

## Await

The use of `await` is restricted only within a function declared with the keyword _async_, basically what it does is wait for the Promise response value or convert the value into a resolved Promise.

```javascript
async function myAsyncFunction() {
  const payload = await { name: "felipe", age: 22 };
  console.log(payload); // { name: 'felipe', age: 22 }
}

myAsyncFunction();
```

In cases where we are not returning any value from our function, the execution call remains as normal function calls without using `.then`.

## Catching errors with try/catch

`Await` always expects the success value of the promise, so we have no way to capture the error directly, to do this we have to make use of the `try/catch` which receives the reject value if it happens, within the promises that are being executed inside the `try` block:

```javascript
async function myAsyncErrorFunction() {
  throw "ops, something wrong happen";
}

async function myAsyncFunction() {
  try {
    const response = await myAsyncErrorFunction();
  } catch (error) {
    console.log(error); // ops, something wrong happen
  }
}

myAsyncFunction();
```

Executing this block, the error happens inside the promise `myAsyncErrorFunction` and is captured inside the try/catch `catch` block.

In summary, the joint use of the implementations makes our code extremely simple and readable, making handling asynchronous (or synchronous) data more directly and effectively.

I hope you enjoyed this series, see you later!

🔭
