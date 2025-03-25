function DisplayItem({ itemList, deleteItem, updateItem }) {
  //   console.log(itemList);

  return (
    <>
      {itemList &&
        itemList.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.item}</li>
              <button type="button" onClick={() => deleteItem(item.id)}>
                X
              </button>
              <button type="button" onClick={() => updateItem(item.id)}>
                update
              </button>
            </ul>
          );
        })}
    </>
  );
}

export default DisplayItem;
