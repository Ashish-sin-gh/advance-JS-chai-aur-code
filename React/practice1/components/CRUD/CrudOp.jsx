import { useReducer, useState } from "react";
import AddData from "./AddData";
import ListData from "./ListData";

function CrudOp() {
  function itemReducer(dataList, action) {
    switch (action.type) {
      case "ADD":
        return [...dataList, { item: action.payload, id: dataList.length + 1 }];

      case "DELETE":
        const newDataList = dataList.filter(
          (data) => data.id !== action.payload
        );
        return newDataList;

      case "UPDATE":
        const itemIdx = dataList.findIndex(
          (data) => data.item === action.payload
        );
        // console.log(itemIdx);
        const newData = [...dataList];
        newData.splice(itemIdx, 1, action.payload);
        console.log(newData);
        // setDataList(newData);
        return newData;

      default:
        return dataList;
    }
  }

  const [dataList, dispatch] = useReducer(itemReducer, []);
  // const [dataList, setDataList] = useState([]);

  const [editableData, setEditableData] = useState(null);

  function addData(data) {
    dispatch({
      type: "ADD",
      payload: data,
    });
    // setDataList([...dataList, { item: data, id: dataList.length + 1 }]);
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
    // const newDataList = dataList.filter((data) => data.id !== id);
    // setDataList(newDataList);
  }

  function handleEdit(id) {
    setEditableData(dataList.find((data) => data.id === id));
    console.log(editableData);
  }

  function updateData(item) {
    dispatch({
      type: "UPDATE",
      payload: item,
    });
    // const itemIdx = dataList.findIndex((data) => data.item === item);
    // // console.log(itemIdx);
    // const newData = [...dataList];
    // newData.splice(itemIdx, 1, item);
    // console.log(newData);
    // setDataList(newData);
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
