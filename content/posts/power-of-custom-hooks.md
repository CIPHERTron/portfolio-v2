---
title: "Custom Hooks: The Secret to Cleaner, Smarter React Components"
date: "2024-05-07"
legacyID: "custom-hooks-the-secret-to-cleaner-and-smarter-components"
thumbnail: "📘"
published: true
latest: false
description: "React hooks have revolutionized the way we write functional components. They allow us to extract and reuse stateful logic, making our code more modular and easier to manage. In this article, we..."
cover: "https://res.cloudinary.com/pritish007/image/upload/v1716454766/Personal%20Portfolio/Articles/react-hooks-1_xx1cyl.webp"
articleLink: "https://pritishsamal.xyz/blog"
tags:
  - React
  - Custom Hooks
  - Clean Code
---

React hooks have revolutionized the way we write functional components. They allow us to extract and reuse stateful logic, making our code more modular and easier to manage. In this article, we will explore how custom hooks can make your React code cleaner and your components smarter. We will illustrate this by comparing a timer component implemented with and without a custom hook.

## The Problem: A Timer Component
Imagine you need to build a timer component with start, pause, and reset functionalities. Without custom hooks, the logic for managing the timer would be embedded directly within the component. This approach can quickly become unwieldy, especially as the complexity of your application grows.

### Timer Component Without Custom Hooks
First, let's look at how we might implement a timer component without using custom hooks:

```js
import React, { useState, useEffect, useRef, useCallback } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, [isRunning]);

  const pause = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerId.current);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerId.current);
    setTime(0);
  }, []);

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
```


### Issues with This Approach
**Reusability**: The timer logic is tightly coupled with the Timer component, making it difficult to reuse in other components.
**Readability**: As the component grows, it becomes harder to read and maintain due to the intermingling of timer logic and UI rendering logic.
**Testing**: Testing the timer logic requires rendering the entire component, complicating unit tests.

### The Solution: Using a Custom Hook

To solve these issues, we can extract the timer logic into a custom hook. This separation of concerns not only makes our code cleaner but also enhances reusability and testability.

### Creating the Custom Hook
Here's how we can refactor the timer logic into a custom hook:

```js
import { useState, useEffect, useCallback, useRef } from "react";

function useTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, [isRunning]);

  const pause = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerId.current);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerId.current);
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);

  return { time, start, pause, reset };
}

export default useTimer;
```

### Using the Custom Hook in a Component
Now, let's use this custom hook in our Timer component:

```js
import React from "react";
import useTimer from "./useTimer";

function Timer() {
  const { time, start, pause, reset } = useTimer(0);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
```

### Benefits of Using the Custom Hook
**Reusability**: The useTimer hook can be easily reused in other components or even different projects.
**Separation of Concerns**: The timer logic is isolated from the UI rendering logic, making both easier to understand and maintain.
**Readability**: The Timer component is now cleaner and more focused on rendering the UI.
**Testing**: The timer logic can be tested independently of the component rendering, simplifying unit tests.

## Conclusion
Custom hooks in React provide a powerful way to encapsulate and reuse stateful logic. By refactoring our timer logic into a custom hook, we made our code cleaner, more modular, and easier to maintain. This approach not only enhances the readability of our components but also promotes better code reuse and testing practices.

By leveraging custom hooks, you can keep your React components simple and focused on what they do best: rendering UI. Meanwhile, the logic that drives your application can live in reusable, isolated hooks, making your codebase cleaner and your development process more efficient.

## Link to devbox
Here's this link to the devbox - [codesandbox.io/p/devbox/timer-custom-hook-mcz3rf](https://codesandbox.io/p/devbox/timer-custom-hook-mcz3rf)