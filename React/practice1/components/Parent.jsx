import React from "react";
import Child from "./Child";

function Parent({ children }) {
  return (
    <div>
      {/* <Child></Child>
      <Child></Child>
      <Child></Child> */}
      {children}
    </div>
  );
}

export default Parent;
