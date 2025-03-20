function ListData({ dataList, handleDelete }) {
  // function handleDelete() {
  //   console.log(dataList(data.id));
  // }
  // console.log(id);
  return (
    <ul>
      {dataList.map((data) => {
        return (
          <div key={data.id}>
            <li>{data.item}</li>
            <button type="button" onClick={()=>handleDelete(data.id)}>
              X
            </button> 
            <button type="button">clear</button>
          </div>
        );
      })}
    </ul>
  );
}

export default ListData;
