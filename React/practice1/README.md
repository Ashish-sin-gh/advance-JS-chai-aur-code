# React

## useContext hook

Context lets the parent component make some information available to any component in the tree below it.

`Context lets a parent component provide data to the entire tree below it`

### way for a child to “ask” for data from somewhere above in the tree.

You can’t do it with props alone. This is where context comes into play.

You will do it in three steps:

1. Create a context.
2. Use that context from the component that needs the data.
3. Provide that context from the component that specifies the data.
4. consume the context

`useContext tells React that the Heading component wants to read the LevelContext.`

## useRef

when you want a component to remember some information, but you don't want that info to trigger a new render, use a `Ref`.

Its like a secret pocket of your component that react does not track.

`Unlike state The component does not rerender with every state change`

`Like state refs are retained by React between re-renders`

best example for a ref is stopwatch.

The value of useRef is mutable.

### When to use useRef?

1. react needs to communicate with external APIs- browser APIs.
2. accessing DOM element managed by react -

   1. focus a node
   2. scroll to a node
   3. measure its size and position

   `const myref = useRef(null)`

   `<div ref={myref}`

## useEffect

### Component Life Cycle:

![component life cycle image](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)

Effect let you run some code after rending so that you can synchronize your component with some system outside of react.

Two type of logic inside react components:

- **Rendering code**:
  lives at the top level of your component.
  returns JSX.
  rendering code must be pure.(`calculate` and return the result)

  > pure component- if prop state and context is same - output will be same.

- **Event Handlers**: nested function inside a component that do things rather than calculate them.

  event handlers contains `side effects` (change the program state) caused by specific user action

## useMemo()

### Memoisation

It is basically storing/cacheing a result of a calculation for future use in the program.

used to tackle expensive operation in the program.

`use in Dynamic programming`

## useCallback()

used to `cache` a function.

The main use of it is to stop the unnecessary re-render of a `child component` that just use a function that is received as a `prop`.

When a child component is re-rended unnecessarily- stop this by using React.memo

```
import React from 'react'

const ChildComponent = React.memo(
  (props) => {

    console.log("Child Component go re-rendered again");

    return (
      <div>
        <button>
          {props.buttonName}
        </button>
      </div>
    )
  }
);
```
