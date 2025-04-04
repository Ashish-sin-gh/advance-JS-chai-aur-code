import { useCallback, useState } from "react";
import ChildUCB from "./childUCB";

function ParentUCB() {
  const [count, setCount] = useState(0);

  //   function handleClick() {
  //     setCount((prev) => prev + 1);
  //   }
  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>increase counter 1</button>

      <ChildUCB handleClick={handleClick} />
    </div>
  );
}

export default ParentUCB;
