// for state management and rerender a component whenever the state changes in react we have useState as well as useReducer
// useReducer - handle complex and long state code

function counterReducer(counter, action) {
  // function reducer(current-state, action){}
  // whatever is passed as an argument to dispatch is feeded in action
  //  dispatch calls reducer
  switch (action.type) {
    case "INC":
      if (counter.count < 6) {
        return { count: counter.count + action.payload };
      }
    case "DEC":
      return { count: counter.count - action.payload };
    default:
      return counter;
  }
}

import { useReducer } from "react";

function CounterUR() {
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 });
  // const [<state>, <dispatch-function>] = useReducer (<reducer-function>, <initial-value>)
  // reducer function - a function that we perform on the state to get a new state
  // dispatch is a function that we call to update ur state

  function increase() {
    dispatch({ type: "INC", payload: 1 });
  }

  function decrease() {
    dispatch({ type: "DEC", payload: 1 });
  }

  return (
    <>
      <button onClick={increase}>++</button>
      <h3>count:{counter.count}</h3>
      <button onClick={decrease}>--</button>
    </>
  );
}

export default CounterUR;
