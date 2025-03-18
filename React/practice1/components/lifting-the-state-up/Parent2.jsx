import { useState } from "react";
import Child2 from "./Child2";

function Parent2() {
  const [dataList, setDataList] = useState([]);

  function addDataToList(data) {
    setDataList([...dataList, { ...data, key: dataList.length + 1 }]);
  }

  return (
    <>
      <Child2 addData={addDataToList}></Child2>

      {dataList.map((element) => {
        return (
          <ul key={element.key}>
            <h3>{element.text1}</h3>
            <h3>{element.text2}</h3>
          </ul>
        );
      })}
    </>
  );
}

export default Parent2;
