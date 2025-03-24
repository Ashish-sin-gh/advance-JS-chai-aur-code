import { useState } from "react";

function AddItem({ addItemToList }) {
  const [item, setItem] = useState({ item: "" });

  function handleKeyPress(e) {
    e.preventDefault();
    setItem({ item: e.target.value });
    // console.log(item);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItemToList(item);
    console.log(item);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>enter item:</label>
      <input
        type="text"
        onChange={handleKeyPress}
        placeholder="item_name"
        value={item ? item.item : ""}
      ></input>

      <button type="submit">submit</button>
    </form>
  );
}

export default AddItem;
