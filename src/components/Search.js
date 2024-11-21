import React, { useState } from "react";

const Search = ({ onAddCity }) => {
  const [cityName, setCityName] = useState("");

  const handleAddCity = () => {
    if (cityName.trim() === "") return;
    const newCity = {
      id: Date.now(),
      name: cityName,
      currentTemp: "22°C",
      weather: "Sunny",
      highTemp: "25°C",
      lowTemp: "18°C",
      forecast: [
        { day: "Day 1", high: "24°C", low: "19°C" },
        { day: "Day 2", high: "23°C", low: "18°C" },
        { day: "Day 3", high: "22°C", low: "17°C" },
      ],
    };
    onAddCity(newCity);
    setCityName("");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={handleAddCity}>Add</button>
    </div>
  );
};

export default Search;
