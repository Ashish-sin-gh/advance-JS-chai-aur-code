import { useMemo, useState } from "react";

function ExpensiveTask() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  function handleButtonClick() {
    setCounter((counter) => counter + 1);
  }

  function otherTask(input) {
    for (let i = 0; i <= 1000000000; i++) {}
    return input * 2;
  }

  const double = useMemo(() => {
    otherTask(inputVal);
  }, [inputVal]);
  return (
    <div style={{ border: "1px,solid,black", margin: "10px", padding: "10px" }}>
      <h2>useMemo</h2>
      <button onClick={handleButtonClick}>click</button>
      <h2>{counter}</h2>
      <input
        type="number"
        value={inputVal}
        placeholder="value"
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <h3>{double}</h3>
    </div>
  );
}

export default ExpensiveTask;
