---
title: "Catching errors with React Error Boundary"
date: "2020-03-18"
category: posts
lang: en
---

> A knowledge of React lifecycles is recommended, if you have questions or don't know [this guide can help you](https://reactjs.org/docs/glossary.html#lifecycle-methods)!

## Introduction

React 16.x releases bring great and good implementations and significant improvements, one of which is extremely useful for error control within the application, known as **error boundary** is an error capture strategy that would naturally break the application (behavior native to javascript applications), can now be controlled and scaled with simple React lifecycles! So far **only** component classes support the life cycles that are necessary for capture and control, more details can be found [in the official documentation](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes).

Lifecycles are `static getDerivedStateFromError` and **componentDidCatch** that can be used together or separately, but the combination of the two methods allows for better control.

## How works?

In general, the lifecycle captures an error at any point in the tree **below** it, any error that occurs within the same node will only be captured by the **first boundary** of the tree at the top level of the node. In general and as an indication as good practices, a **BoundaryWrapper** is used as a **ApplicationWrapper**, is applied to capture generic errors, as a way to centralize error catches, facilitating debugging, change, etc. The other specific boundary's must be created and applied according to the need, but always keeping in mind the previous rule of capture per level.

One way to make a similar use of an **error boundary** is to compare it with the natural **catch** that captures errors within the commonly known javascript.

## Demo

Let's simulate an error in a simple API request and trigger an error inside catch as we know it:

```javascript
import MyBoundary from "./my-boundary";

class DispacthError extends React.Component {
  componentDidMount = async () => {
    try {
      const response = await fetch("https://fake.url"); // fake url to crash
      const json = await response.json();
      // ...
    } catch (e) {
      throw new Error(e.toString); // throwing a new error
    }
  };

  render() {
    <div>
      <p>hola</p>
    </div>;
  }
}

const App = () => (
  <MyBoundary>
    <DispacthError />
  </MyBoundary>
);

ReactDOM.render(document.getElementById("root"), <App />);
```

the `MyBoundary` component is responsible for catching the error and showing a message:

```javascript
export default class MyBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(data) {
    return { error: true }; // update the state object
  }

  componentDidCatch(error, data) {
    // handle the error content here.
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) return <p>Something wrong happen! 🧐</p>;

    return children;
  }
}
```

The **componentDidCatch** method contains the error information and all the details of what triggered the error. The **getDerivedStateFromError** method returns the new state for the class, which in this case updates the state being used within the **render** method, where it returns a generic error message or the child that was added within **App.js**.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="felipesousa" data-slug-hash="NWqzjyZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React Error Boundary Example">
  <span>See the Pen <a href="https://codepen.io/felipesousa/pen/NWqzjyZ">
  React Error Boundary Example</a> by Felipe Sousa (<a href="https://codepen.io/felipesousa">@felipesousa</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Resume

React in general increasingly brings the library and its entire "ecosystem" as close as possible to the native language, which helps a lot in terms of performance, learning curve and implementation, apart from testing improvements, debugging, scalability and sharing. Capturing error in this way is simply one of the simplest strategies that seem to me today, since before, a high level control required a little more manual and much more verbose work, error boundary is a great spec that helps and a lot in quality and practicality.

There are good references in which you can go even deeper and better control the cases of more specific or more generic errors, the article [Exploit React Error Boundaries to Improve UX](https://medium.com/chingu/exploit-react-error-boundaries-to-improve-ux-8e1b18faa5ab) by [Jim Medlock](https://medium.com/@jdmedlock?source=post_page-----8e1b18faa5ab----------------------) is certainly a good recommendation in addition to the [official React documentation](https://reactjs.org/docs/error-boundaries.html#gatsby-focus-wrapper).

See you later! 🛋
