// important note on key

// Why is key Special?
// React only uses key for internal list reconciliation.
// It is not passed as a prop to the child component.
// That’s why if you try console.log(props.key), it will be undefined.

import React from "react";

const MapHigherOrderFunction = ({ myName, myClass }) => {
  return (
    <div>
      <h1>{myName}</h1>
      <h2>{myClass}</h2>
      {/* <h3>{key}</h3> */}
    </div>
  );
};

export default MapHigherOrderFunction;
