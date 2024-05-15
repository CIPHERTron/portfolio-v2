---
title: "Crafting React's useEffect Magic: Building a Custom Side Effect Hook Without useEffect"
date: "2024-04-12"
legacyID: "create-custom-useeffect-hook"
thumbnail: "📘"
description: "React's useEffect hook is fundamental for managing side effects in functional components. While React provides the native useEffect hook to..."
published: true
latest: false
cover: "https://res.cloudinary.com/pritish007/image/upload/v1714996435/Personal%20Portfolio/custom-hook_q1rspq.png"
articleLink: "https://pritishsamal.xyz/blog"
tags:
  - React
  - useEffect
  - TypeScript
  - CustomHook
  - SideEffect
---

## Introduction
React's useEffect hook is fundamental for managing side effects in functional components. While React provides the native useEffect hook to handle these side effects, understanding its inner workings by building a custom version can be enlightening. In this article, we'll embark on the journey of creating a useEffect-like hook from scratch, without utilizing React's built-in useEffect.

## Understanding useEffect
Before diving into the implementation, let's briefly recap what useEffect does and how it's typically used in React components.

The useEffect hook allows developers to perform side effects in functional components. It accepts a function (the effect) and an optional array of dependencies. The effect function is called after every render and can be used for various tasks like data fetching, subscriptions, or DOM manipulations. The dependencies array allows us to control when the effect runs by specifying the values it depends on.

## Anatomy of useEffect
To build our custom useEffect hook, we need to replicate its core functionality. Here's what our custom useEffect will do:

- Execute a callback function after every render cycle.
- Allow specifying dependencies to control when the effect runs.

## Step-by-Step Implementation
Let's break down the implementation of our custom useEffect hook into smaller steps:

### Creating the Custom Hook

```ts
import { useState, useRef } from 'react';

function useCustomEffect(callback, dependencies) {
  const previousDeps = useRef([]);
  const isFirstRender = useRef(true);

  if (!isFirstRender.current) {
    const areDepsChanged = dependencies.some(
      (dep, index) => dep !== previousDeps.current[index]
    );
    if (!areDepsChanged) return;
  }

  if (isFirstRender.current) {
    isFirstRender.current = false;
  }

  previousDeps.current = dependencies;

  callback();
}
```

In this code snippet:
- We define a function called useCustomEffect that takes a callback function and an array of dependencies as arguments.
- We use useRef to maintain a reference to the previous dependencies and a flag to track the first render.
- On subsequent renders, we compare the current dependencies with the previous dependencies. If they are the same, we skip running the effect.
- We update the previous dependencies and execute the callback function.

### Usage Example
Now that we've implemented our custom useEffect hook, let's see how we can use it in a React component.

```ts
import React, { useState } from 'react';
import useCustomEffect from './useCustomEffect';

function MyComponent() {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log('Effect ran');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default MyComponent;
```

In this example, we're using our custom useEffect hook to log a message whenever the count state changes. The effect will only run when the count changes, similar to React's native useEffect.

## Conclusion
In this article, we've explored how to create a custom useEffect-like hook in React without relying on the native useEffect provided by React. By understanding the core concepts of useEffect and leveraging React's useRef hook, we were able to replicate its functionality. Building custom hooks not only enhances your understanding of React but also empowers you to create tailored solutions for your applications.
