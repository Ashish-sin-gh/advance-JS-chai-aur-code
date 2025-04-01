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
