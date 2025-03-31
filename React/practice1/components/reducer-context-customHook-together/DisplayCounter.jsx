import UseCounter from "./hook/UseCounter";

function DisplayCounter() {
  const counter = UseCounter();
  return <h1>{counter}</h1>;
}

export default DisplayCounter;
