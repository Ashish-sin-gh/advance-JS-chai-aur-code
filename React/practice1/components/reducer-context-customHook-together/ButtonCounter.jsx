import UseCounter from "./hook/UseCounter";

function ButtonCounter({ dispatch, children }) {
  const counter = UseCounter();
  console.log(counter);
  return (
    <button type="button" onClick={dispatch}>
      {children}
    </button>
  );
}

export default ButtonCounter;
