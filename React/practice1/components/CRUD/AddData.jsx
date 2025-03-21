import { useState, useEffect } from "react";

function AddData({ addData, editableData, updateData }) {
  const [itemData, setItemData] = useState("");

  function handleChange(e) {
    e.stopPropagation();
    setItemData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editableData) {
      updateData(itemData);
    } else {
      addData(itemData);
    }
  }

  useEffect(() => {
    if (editableData) {
      setItemData(editableData.item);
    }
  }, [editableData]);

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
