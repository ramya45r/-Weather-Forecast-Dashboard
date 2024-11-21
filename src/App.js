import React, { useState } from "react";
import { mockCities } from "./mockAPI";
import CityCard from "./components/City";
import Search from "./components/Search";
import TemperatureChart from "./components/TemperatureChart";
import "./index.css";

const App = () => {
  const [cities, setCities] = useState(mockCities);
  const [selectedCity, setSelectedCity] = useState(null);

  const addCity = (city) => setCities((prev) => [...prev, city]);

  const removeCity = (id) =>
    setCities((prev) => prev.filter((city) => city.id !== id));

  return (
    <div className="app">
      <header>
        <h1>Weather Forecast Dashboard</h1>
        <Search onAddCity={addCity} />
      </header>
      <main>
        <div className="city-grid">
          {cities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              isSelected={selectedCity?.id === city.id} 
              onRemove={() => removeCity(city.id)}
              onSelect={() => setSelectedCity(city)}
            />
          ))}
        </div>
        {selectedCity && <TemperatureChart city={selectedCity} />}
      </main>
    </div>
  );
};

export default App;
