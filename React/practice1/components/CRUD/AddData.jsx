import { useState } from "react";

function AddData({ addData }) {
  const [itemData, setItemData] = useState("");

  function handleChange(e) {
    e.stopPropagation();
    setItemData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addData(itemData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="item"
          value={itemData}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default AddData;
