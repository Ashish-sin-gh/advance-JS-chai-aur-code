import { useReducer, useState } from "react";
import AddItem from "./AddItem";
import DisplayItem from "./DisplayItem";

function ParentCrudReducer() {
  function itemListReducer(itemList, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...itemList,
          { item: action.payload.item, id: itemList.length + 1 },
        ];
      case "DELETE":
        // console.log(id);
        const listAfterDelete = itemList.filter(
          (item) => item.id !== action.payload
        );
        return listAfterDelete;
      // console.log(listAfterDelete);
      case "UPDATE":
        const index = itemList.findIndex(
          (element) => action.payload.id === element.id
        );
        const newList = [...itemList];
        newList.splice(index, 1, item);
        return newList;
    }
  }

  const [itemList, dispath] = useReducer(itemListReducer, []);
  // const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function addItemToList(item) {
    // this function is just calling the dispatch so we dont need this function, we can directly send dispatch as prop in a component

    // setItemList([...itemList, { item: item.item, id: itemList.length + 1 }]);
    dispath({
      type: "ADD",
      payload: item,
    });
  }

  function deleteItem(id) {
    dispath({
      type: "DELETE",
      payload: id,
    });
    // console.log(id);
    // const listAfterDelete = itemList.filter((item) => item.id !== id);
    // setItemList(listAfterDelete);
    // console.log(listAfterDelete);
  }

  function updateItem(id) {
    setSelectedItem(itemList.find((item) => item.id === id));
  }

  function editedList(item) {
    dispath({
      type: "UPDATE",
      payload: item,
    });

    // console.log(item);
    // const index = itemList.findIndex((element) => item.id === element.id);
    // const newList = [...itemList];
    // newList.splice(index, 1, item);
    // setItemList(newList);
    // }

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
}

export default ParentCrudReducer;
