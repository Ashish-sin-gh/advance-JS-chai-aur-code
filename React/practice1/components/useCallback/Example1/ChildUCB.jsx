import React, { useState } from "react";

const ChildUCB = React.memo(({ handleClick }) => {
  //   const [count, setCount] = useState(0);
  console.log("child re-render");

  return (
    <div>
      {/* <h2>{count}</h2> */}
      <button onClick={handleClick}>increase counter 2</button>
    </div>
  );
});
export default ChildUCB;
