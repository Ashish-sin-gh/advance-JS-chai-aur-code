import { useContext } from "react";
import DispatchContext from "../context/DispatchContext";

function UseDispatch() {
  return useContext(DispatchContext);
}

export default UseDispatch;
