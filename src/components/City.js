import React from "react";
import "./CityCard.css";

const City = ({ city, onRemove, onSelect, isSelected }) => {
  return (
    <div
      className={`city-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="card-header">
        <h2>{city.name}</h2>
        <img
          src={`/icons/${city.weather.toLowerCase()}.png`}
          alt={city.weather}
          className="weather-icon"
        />
      </div>
      <div className="card-body">
        <p className="current-temp">{city.currentTemp}</p>
        <p className="weather">{city.weather}</p>
        <p className="high-low">
          High: <span>{city.highTemp}</span> | Low: <span>{city.lowTemp}</span>
        </p>
      </div>
      <button
        className="remove-button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default City;
