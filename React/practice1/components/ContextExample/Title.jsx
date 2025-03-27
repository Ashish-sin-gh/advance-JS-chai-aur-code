import { useContext } from "react";
import ThemeContext from "./LevelContext";

function Title({ children }) {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <section style={{ border: "2px solid black", padding: "15px" }}>
        {children}
      </section>
    </>
  );
}

export default Title;
