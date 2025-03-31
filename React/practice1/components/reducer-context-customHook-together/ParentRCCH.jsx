import { useReducer } from "react";
import Heading from "./Heading";
import CounterContext from "./context/CounterContext";
import DispatchContext from "./context/DispatchContext";

function counterReducer(counter, action) {
  switch (action.type) {
    case "INC":
      return counter + action.payload;
    case "DEC":
      return counter - action.payload;
    default:
      return counter;
  }
}

function ParentRCCH() {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <CounterContext.Provider value={counter}>
        <DispatchContext.Provider value={dispatch}>
          <Heading></Heading>
        </DispatchContext.Provider>
      </CounterContext.Provider>
    </>
  );
}

export default ParentRCCH;
