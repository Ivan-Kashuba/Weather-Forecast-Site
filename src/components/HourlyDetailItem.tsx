import React from "react";
import { hourlyInfo } from "../types/types";

type props_T = {
  hourlyItem: hourlyInfo;
};

const HourlyDetailItem = ({ hourlyItem }: props_T) => {
  const { main, icon } = hourlyItem.weather[0];
  const hourTime = new Date(hourlyItem.dt * 1000).getHours();

  return (
    <div className="hourlyDetailItem">
      <div className="hourTemperature">
        {Math.round(hourlyItem.temp)} &#176;С
      </div>
      <div className="hourlyItemMainBlock">
        <div className="hourlyItemCloudiness">
          <strong> Cloudiness: </strong>
          {hourlyItem.clouds}%
        </div>
        <div className="hourlyItemIcon">
          <div>{main}</div>
          <img
            className="weatherIcon"
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt=""
          />
        </div>
        <div className="hourlyItemCloudiness">
          <strong> Wind speed: </strong>
          {hourlyItem.wind_speed} Km/h
        </div>
      </div>
      <div className="hourlyItemTime">{hourTime}:00</div>
    </div>
  );
};

export default HourlyDetailItem;
