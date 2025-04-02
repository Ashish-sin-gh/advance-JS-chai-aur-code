import { use, useEffect, useRef } from "react";

function RefForFocus() {
  const focusedRef = useRef(null);

  useEffect(() => {
    // focusedRef.current.focus();
    focusedRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);
  return (
    <form>
      <label htmlFor="inputFocused">already focused:</label>
      <input
        type="text"
        id="inputFocused"
        placeholder="focued node"
        ref={focusedRef}
      ></input>
    </form>
  );
}

export default RefForFocus;
