import { useState } from "react";
import AddData from "./AddData";
import ListData from "./ListData";

function CrudOp() {
  const [dataList, setDataList] = useState([]);
  console.log(dataList)
  
  function addData(data) {
    setDataList([...dataList, { item: data, id: dataList.length + 1 }]);
  }

  function handleDelete(id){
    const newDataList = dataList.filter((data)=>data.id !== id);
    setDataList(newDataList);
  }

  return (
    <>
      <AddData addData={addData}></AddData>
      <ListData dataList={dataList} handleDelete={handleDelete}></ListData>
    </>
  );
}

export default CrudOp;
