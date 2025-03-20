function ListData({ dataList }) {
  return (
    <ul>
      {dataList.map((data) => {
        return (
          <div>
            <li>{data}</li>
            <button type="button">X</button>
            <button type="button">clear</button>
          </div>
        );
      })}
    </ul>
  );
}

export default ListData;
