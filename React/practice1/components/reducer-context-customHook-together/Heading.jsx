// import { useReducer } from "react";
import ButtonCounter from "./ButtonCounter";
import DisplayCounter from "./DisplayCounter";
import UseDispatch from "./hook/UseDispatch";

function Heading() {
  const dispatch = UseDispatch();
  return (
    <>
      <h1>counter using reducer context custom hook</h1>

      <ButtonCounter dispatch={() => dispatch({ type: "INC", payload: 1 })}>
        increase
      </ButtonCounter>

      <DisplayCounter></DisplayCounter>

      <ButtonCounter dispatch={() => dispatch({ type: "DEC", payload: 1 })}>
        decrease
      </ButtonCounter>
    </>
  );
}

export default Heading;
