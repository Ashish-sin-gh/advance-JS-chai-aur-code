//for lifting the state up u need a function prop to be sent from parent component to child component
// this funciton prop has an parameter that will be resposible for storing the data from the child component and this data will flow to the parent component.
// https://youtu.be/6l8RWV8D-Yo?si=Uog5M3xQasJwQeCX&t=14400

import { useState } from "react";
import ChildComp from "./childComp";

function ParentComp() {
  const initialNameState = [];
  const [listOfNames, setListOfNames] = useState(initialNameState);

  function addNames(name) {
    setListOfNames([...listOfNames, { ...name, key: listOfNames.length + 1 }]);
  }
  return (
    <>
      <ChildComp addNames={addNames}></ChildComp>

      {listOfNames.map((el) => {
        return (
          <ul key={el.key}>
            <li>{el.firstName}</li>
            <li>{el.lastName}</li>
          </ul>
        );
      })}
    </>
  );
}

export default ParentComp;
