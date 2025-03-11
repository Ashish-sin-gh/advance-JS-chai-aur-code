// in react u can render a component with local variable update
// that means, the variable will change/update using a update function/statement but it wont trigger an react render.
// hence useState is used. - make state variable
// useState is a hook.

// when the component is re-rendered the useState hook dont loose the data and it store it in the memory to update the state

// example- counter component
import { useState } from "react";

function StateUpdate() {
  const [number, setNumber] = useState(0);
  // when the component is re-rendered the useState hook dont loose the data and it store it in the memory to update the state

  function counting() {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1); // it will add only once as number is stored as snapshot and isnt changing without a render

    // updater function
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    console.log(number); //snapshot
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => counting()}>add</button>
    </>
  );
}

export default StateUpdate;
