import { useState } from "react";
function Child2({ addData }) {
  const [data, setData] = useState({
    text1: "",
    text2: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addData(data);
    setData({ text1: "", text2: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter the text"
        value={data.text1}
        name="text1"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="enter the text"
        value={data.text2}
        name="text2"
        onChange={handleChange}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
}

export default Child2;
