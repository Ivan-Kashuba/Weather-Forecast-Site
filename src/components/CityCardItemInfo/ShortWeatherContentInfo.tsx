import React from "react";
import { shortDescriptionCity_T } from "../../types/types";

type props_T = {
  city: shortDescriptionCity_T;
};

const ShortWeatherContentInfo = ({ city }: props_T) => {
  return (
    <div className="shortWeatherContent">
      <div>
        <div>
          <strong>Feels like:</strong>
          {Math.round(city.main.feels_like)}&#176;С
        </div>
        <div>
          <strong>Max:</strong>
          {Math.round(city.main.temp_max)}&#176;С
        </div>
        <div>
          <strong>Min:</strong>
          {Math.round(city.main.temp_min)}&#176;С
        </div>
      </div>
      <div>
        <div className="cloudStatus">
          <strong>{city.weather[0].description}</strong>
        </div>

        <div>
          <strong>Wind:</strong>
          {Math.round(city.wind.speed)} m/sec
        </div>

        <div>
          <strong>Humidity:</strong>
          {Math.round(city.main.humidity)} %
        </div>
      </div>
    </div>
  );
};

export default ShortWeatherContentInfo;
