import { useState } from "react";

function Form() {
  const cityNameList = [
    "India",
    "China",
    "USA",
    "Pakistan",
    "Mangolia",
    "UK",
    "France",
  ];

  const [cityName, setCityName] = useState("");
  const [matchedCity, setMatchedCity] = useState([]);

  function handleChange(e) {
    setCityName(e.target.value);
    const newMatchedCity = cityNameList.filter((city) =>
      city.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMatchedCity(newMatchedCity);
    console.log(matchedCity);
  }

  return (
    <>
      <br></br>
      <h2>Filtered List</h2>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="enter name of the city"
          value={cityName}
          name="cityName"
        ></input>
        <select>
          {matchedCity.map((city) => {
            return <option value={city}>{city}</option>;
          })}
        </select>
      </form>
      <br></br>
      <br></br>
    </>
  );
}

export default Form;
