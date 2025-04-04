import React, { useState } from "react";

const ChildUCB = React.memo(({ count }) => {
  //   const [count, setCount] = useState(0);
  console.log("child re-render");

  return (
    <div>
      <h2>{count}</h2>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>
        increase counter 2
      </button> */}
    </div>
  );
});
export default ChildUCB;
