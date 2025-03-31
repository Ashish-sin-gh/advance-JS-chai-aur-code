import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ToggleViewer() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          height: "200px",
          width: "400px",
          border: "1px black solid",
          backgroundColor: theme === "dark" ? "black" : "white",
        }}
      ></div>
    </>
  );
}

export default ToggleViewer;
