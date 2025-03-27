import { useContext } from "react";
import LevelContext from "./LevelContext";

function SubTitle({ children }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      return <h1>{children}</h1>;
    case 1:
      return <h2>{children}</h2>;
    case 2:
      return <h3>{children}</h3>;
    case 3:
      return <h4>{children}</h4>;
    default:
      return <h5>{children}</h5>;
  }
}

export default SubTitle;
