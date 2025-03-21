import { useState } from "react";
import AddData from "./AddData";
import ListData from "./ListData";

function CrudOp() {
  const [dataList, setDataList] = useState([]);
  const [editableData, setEditableData] = useState(null);

  function addData(data) {
    setDataList([...dataList, { item: data, id: dataList.length + 1 }]);
  }

  function handleDelete(id) {
    const newDataList = dataList.filter((data) => data.id !== id);
    setDataList(newDataList);
  }

  function handleEdit(id) {
    setEditableData(dataList.find((data) => data.id === id));
    console.log(editableData);
  }

  function updateData(item) {
    const itemIdx = dataList.findIndex((data) => data.item === item);
    // console.log(itemIdx);
    const newData = [...dataList];
    newData.splice(itemIdx, 1, item);
    console.log(newData);
    setDataList(newData);
  }

  return (
    <>
      <AddData
        addData={addData}
        editableData={editableData}
        updateData={updateData}
      ></AddData>
      <ListData
        dataList={dataList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editableData={editableData}
      ></ListData>
    </>
  );
}

export default CrudOp;
