function ListData({ dataList, handleDelete, handleEdit }) {
  return (
    <ul>
      {dataList.map((data) => {
        return (
          <div key={data.id}>
            <li>{data.item}</li>
            <button type="button" onClick={() => handleDelete(data.id)}>
              X
            </button>
            <button type="button" onClick={() => handleEdit(data.id)}>
              clear
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default ListData;
