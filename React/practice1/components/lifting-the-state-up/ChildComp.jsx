import { useState } from "react";

function ChildComp({ addNames }) {
  const clientDetails = {
    key: 1,
    firstName: "",
    lastName: "",
  };

  const [nameDetails, setNameDetails] = useState(clientDetails);

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setNameDetails({ ...nameDetails, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNames(nameDetails);
    // console.log(nameDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="first name"
        value={nameDetails.firstName}
        onChange={handleChange}
        type="text"
        name="firstName"
      ></input>
      <input
        placeholder="last name"
        value={nameDetails.lastName}
        onChange={handleChange}
        type="text"
        name="lastName"
      ></input>
      <button type="submit">submit</button>
    </form>
  );
}

export default ChildComp;
