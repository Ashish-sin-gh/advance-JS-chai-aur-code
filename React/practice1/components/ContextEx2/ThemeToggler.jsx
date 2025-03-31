import { useContext, useState } from "react";
import ToggleViewer from "./ToggleViewer";
import ThemeContext from "./ThemeContext";

function ThemeToggler() {
  const [mode, setMode] = useState("light");
  // const themeContext = useContext(ThemeContext);

  function toggleTheme() {
    return mode === "light" ? setMode("dark") : setMode("light");
  }

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <h2>theme controller</h2>
        <button onClick={toggleTheme}>
          {mode === "light" ? "dark" : "light"}
        </button>
        <ToggleViewer></ToggleViewer>
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeToggler;
