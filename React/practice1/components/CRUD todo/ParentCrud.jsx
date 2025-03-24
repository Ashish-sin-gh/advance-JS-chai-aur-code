import { useState } from "react";
import AddItem from "./AddItem";
import DisplayItem from "./DisplayItem";

function ParentCrud() {
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function addItemToList(item) {
    setItemList([...itemList, { item: item.item, id: itemList.length + 1 }]);
  }

  function deleteItem(id) {
    console.log(id);
    const listAfterDelete = itemList.filter((item) => item.id !== id);
    setItemList(listAfterDelete);
    console.log(listAfterDelete);
  }

  function updateItem(id) {
    setSelectedItem(itemList.find((item) => item.id === id));
  }

  function editedList(item) {
    console.log(item);
    const index = itemList.findIndex((element) => item.id === element.id);
    const newList = [...itemList];
    newList.splice(index, 1, item);
    setItemList(newList);
  }

  return (
    <>
      <AddItem
        addItemToList={addItemToList}
        selectedItem={selectedItem}
        editedList={editedList}
      ></AddItem>
      <DisplayItem
        itemList={itemList}
        deleteItem={deleteItem}
        updateItem={updateItem}
      ></DisplayItem>
    </>
  );
}

export default ParentCrud;
