import { useEffect, useState } from "react";

function AddItem({ addItemToList, selectedItem, editedList }) {
  //   console.log(selectedItem);
  const [item, setItem] = useState({ item: "" });

  function handleKeyPress(e) {
    e.preventDefault();
    setItem({ ...item, item: e.target.value });
    // console.log(item);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedItem) {
      editedList({ ...selectedItem, item: item.item });
    } else {
      addItemToList(item);
    }
    setItem({ item: "" });
    // console.log(item);
  }

  useEffect(() => {
    console.log(selectedItem);
    setItem(selectedItem);
  }, [selectedItem]);

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
