// useEffect is used in a component to do all the side effects task
// best example for this is data fetching from external system

import { useEffect, useState } from "react";

function DataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://my.api.mockaroo.com/xfsdf.json?key=0b644c90";

  useEffect(() => {
    async function getData() {
      const data = await fetch(URL);
      const result = await data.json();
      await setData(result);
      console.log(result);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <ul>
          {data.map((el) => {
            console.log(el.id);
            return <li key={el.id}>{`${el.first_name} ${el.last_name}`}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default DataFetch;
