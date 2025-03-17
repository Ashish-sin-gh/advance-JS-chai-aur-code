import { useState } from "react";

function UpdatingObjectsInState() {
  const obj = [
    {
      name: "ashish",
      age: 25,
      company: "acpl",
      key: 1,
    },
  ];

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");
  const [data, setData] = useState(obj);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData([...data, { name, age, company, key: data.length + 1 }]);
    console.log(data);
  }
  // console.log(key);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label>
          age:
          <input
            type="number"
            name="age"
            placeholder="age"
            value={age}
            onChange={handleAgeChange}
          ></input>
        </label>
        <label>
          company:
          <input
            type="text"
            name="company"
            placeholder="company"
            value={company}
            onChange={handleCompanyChange}
          ></input>
        </label>
        <button type="submit">submit</button>
      </form>
      {data.map((el) => {
        return (
          <ul key={el.key}>
            <li>{el.name}</li>
            <li>{el.age}</li>
            <li>{el.company}</li>
          </ul>
        );
      })}
    </>
  );
}

export default UpdatingObjectsInState;
