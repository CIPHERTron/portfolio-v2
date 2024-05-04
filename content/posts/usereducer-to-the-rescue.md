---
title: useReducer Hook to the rescue!
date: "2022-02-06"
legacyID: "usereducer-hook-to-the-rescue"
thumbnail: "📘"
description: "Have you ever felt the need of an easier way to manage complex state in your React application without having to install heavy dependencies? You've arrived at the right place. Let us talk about the useReducer hook..."
published: true
latest: false
cover: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pm6023ow729zuo6exzas.png"
articleLink: "https://dev.to/ciphertron/usereducer-hook-to-the-rescue-2j48"
tags:
  - React
  - JavaScript
  - Hooks
  - State
---

Hello folks :wave:
Have you ever felt the need of an easier way to manage complex state in your React application without having to install heavy dependencies? You've arrived at the right place. Let us talk about the **[useReducer()](https://reactjs.org/docs/hooks-reference.html#usereducer)** hook provided by React. You must be familiar with the **useState()** hook in React. It's basically _a hook that lets you add state to a functional value_. The **useReducer** hook, an alternative to the useState hook, also lets you _manage the state when you've a complex state logic_.

There are various state management libraries like [Redux](https://redux.js.org/), [Recoil](https://recoiljs.org/), [Easy Peasy](https://easy-peasy.vercel.app/), etc. Personally, I have used Redux to manage state and can say that the usage of **useReducer** hook is pretty much similar to that of Redux. However, there are some differences between Redux and the useReducer hook. The useReducer hook comes in-built with React but Redux is a 3rd party dependency which was built as a state management tool for JavaScript applications and not specifically for React. Also, it takes a lot of boilerplate code to set-up Redux but setting up useReducer is pretty minimal and straight forward. Today, we'll learn about managing state with useReducer hook by building a **Notes Application**.

So, I'll be demonstrating two basic functionalities of creating and deleting a note using `useReducer()`. You can find the code of the application [here](https://codesandbox.io/s/usereducer-tutorial-by-pritish-p7jc7). First, let us create a **basic controlled form** which will store the **title** and **body** of the note.

```jsx
<form>
  <input
    type="text"
    placeholder="Note Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <input
    type="text"
    placeholder="Note Body"
    value={body}
    onChange={(e) => setBody(e.target.value)}
  />
  <input type="submit" value="Add Note" />
</form>
```

_So, we'll be using two states (one to store the note title and the other to store note body)._

```jsx
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
```

In order to use the useReducer hook, we need to have our `actions` and `reducers` defined. The concept of actions and reducers in this case has the same use-case as that of redux. **Reducer** is nothing but _a pure function that takes an action and the previous state of the application and returns a new state_. **Actions** on the other hand _describes what happened and it is the reducer's job to return the new state based on that action_.

In this case we need two actions i.e. create and delete note which can be written as:

```js
const ACTIONS = {
  ADD_NOTE: "add-note",
  DELETE_NOTE: "delete-note",
};
```

We have our Let's initialise a `useReducer()` hook below 👇

```jsx
const [notes, dispatch] = useReducer(reducer, []);
```

Here, `notes` is the state which will store all the notes and the `dispatch` is the function of the global store using which we can _dispatch an action_. The empty array (`[]`) is the initial state of the `notes` array.

Now, let us define the `onSubmit` handler of our form:

```js
<form onSubmit={handleSubmit}>

const handleSubmit = (e) => {
 e.preventDefault();
 dispatch({ type: ACTIONS.ADD_NOTE, payload: { title: title, body: body } });
 setTitle("");
 setBody("");
}
```

The `dispatch` function will take in an object with a field named `type` which will contain the type of action we want to perform when our form is submitted. Here, we'll be passing `ACTIONS.ADD_NOTE` action. Also, we can pass an optional field named `payload`(name can be anything, not necessarily payload) and can be any type of value.

> It represents the payload of the action. Any information about the action that is not the type or status of the action should be part of the payload field.

When it comes to `reducer`, let's make one for `ADD_NOTE` action:

```js
const reducer = (notes, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTE:
      return [...notes, newNote(action.payload.title, action.payload.body)];
    default:
      return notes;
  }
};
```

The `newNote()` function that you can see above will only return a new note object with all the properties in it. It will look like👇

```js
const newNote = (title, body) => {
  return { id: Date.now(), title: title, body: body };
};
```

On the dispatch of the `ADD_NOTE` action, it will execute its corresponding reducer and then the `notes` state will be updated with the new note.

In-order to display all the Notes, we can map through the `notes` array and we can display each note like below👇

```jsx
{
  notes.map((note) => <Note key={note.id} note={note} />);
}
```

Where, the `Note` component is the structure of a note and is imported in `App.js`.

```jsx
export default function Note({ note }) {
  return (
    <Wrapper>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteBody>{note.body}</NoteBody>
      <DeleteIcon>
        <Trash2 />
      </DeleteIcon>
    </Wrapper>
  );
}
```

Now, you can see when you submit the form a new note gets added in the screen.

> PS: I've used Styled Components to style the jsx elements(personal preference) and feather icons using `react-feather`.

The first part of our application is done i.e. adding a note. Now moving on to deleting a note, we have its corresponding action as `DELETE_NOTE`. So, in order to delete a note, we require its `id` and this action needs to be dispatched when the delete button gets clicked which by the way is present in the `Note.jsx` component. Thus in-order to do the same, we can pass the `dispatch` function as a prop and then dispatch the action inside the note component.

Passing dispatch function as prop👇

```jsx
<Note key={note.id} note={note} dispatch={dispatch} />
```

And then, destructure it in `Note.jsx` and use it when the delete button is clicked. We can do that like such below👇

```jsx
export default function Note({ note, dispatch }) {
  return (
    <Wrapper>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteBody>{note.body}</NoteBody>
      <DeleteIcon
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_NOTE, payload: { id: note.id } })
        }
      >
        <Trash2 />
      </DeleteIcon>
    </Wrapper>
  );
}
```

Since we require the note id inside the reducer, thus we passed it inside the payload object. Now, the final task remaining is to write a reducer function for `DELETE_NOTE` action👇

```js
case ACTIONS.DELETE_NOTE:
      return notes.filter((note) => note.id !== action.payload.id);
```

The above snippet basically traverses through the `notes` array and it makes another array with all the notes whose id doesn't matches with the `note.payload.id`.

That was basically it. Your Note Application is up and running with create and delete functionalities. I know my CSS sucks but I'm trying to become better at it. Please bear with me😂

You can find the full codebase [**here**](https://codesandbox.io/s/usereducer-tutorial-by-pritish-p7jc7). Before concluding, let me quickly walk you through the directory structure:

```bash
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Note.jsx // Note component
│   │   ├── Navbar.jsx // Navbar component
│   ├── store
│   │   ├── actions.js // Contains all the actions
│   │   ├── reducers.js // contains all the reducer functions
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
```

This type of structure can come handy when you've a complex state logic. Here we keep the **actions** and **reducers** separately inside a **store** directory and you just import them and use wherever required.

That was all about the `useReducer()` hook. Hope you liked it. Do like, share and comment your suggestions below. I'm trying to be consistent in publishing articles now xD. There are a few other blogs lined up too. They'll be on the **Context API** in React, beginner's guide to **Kubernetes**, **Golang Minutes**, my **MLH Prep Fellowship** experience, all about **LFX Mentorship Program**, **GitHub Campus Experts** program and many more. If you're interested in such content, do follow me [dev.to/ciphertron](https://dev.to/ciphertron). You can find more about me at [pritishsamal.xyz](https://pritishsamal.xyz).

### Relevant Links:

- [codesandbox.io/s/usereducer-tutorial-by-pritish-p7jc7](https://codesandbox.io/s/usereducer-tutorial-by-pritish-p7jc7)
- [Official React Documentation on useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
