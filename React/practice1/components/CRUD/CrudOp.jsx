import { useState } from "react";
import AddData from "./AddData";
import ListData from "./ListData";

function CrudOp() {
  const [dataList, setDataList] = useState([]);

  function addData(data) {
    setDataList([...dataList, data]);
  }

  return (
    <>
      <AddData addData={addData}></AddData>
      <ListData dataList={dataList}></ListData>
    </>
  );
}

export default CrudOp;
