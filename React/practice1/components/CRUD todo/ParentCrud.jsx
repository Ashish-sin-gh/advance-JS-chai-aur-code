import { useState } from "react";
import AddItem from "./AddItem";

function ParentCrud() {
  const [itemList, setItemList] = useState([]);

  function addItemToList(item) {
    setItemList([...itemList, { item: item, id: itemList.length + 1 }]);
  }

  return (
    <>
      <AddItem addItemToList={addItemToList} />
      {/* <DisplayItem></DisplayItem> */}
    </>
  );
}

export default ParentCrud;
