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
