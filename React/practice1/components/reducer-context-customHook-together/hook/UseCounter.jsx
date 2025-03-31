import { useContext } from "react";
import CounterContext from "../context/CounterContext";

function UseCounter() {
  return useContext(CounterContext);
}

export default UseCounter;
