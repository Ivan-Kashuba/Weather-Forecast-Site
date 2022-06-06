import React from "react";
import { detailedDescriptionCity_T } from "../types/types";
import { getTimefromDate } from "../utils/utils";
import DetailedHourlyInfo from "./DetailedHourlyInfo";

type props_T = {
  detailedCityInfo: detailedDescriptionCity_T;
};

const DetailedCityContent = ({ detailedCityInfo }: props_T) => {
  const date = new Date(detailedCityInfo.current.dt * 1000);
  const cityDate = date.toLocaleDateString();
  const cityTime = getTimefromDate(date);
  const sunrizeTime = getTimefromDate(
    new Date(detailedCityInfo.current.sunrise * 1000)
  );
  const sunsetTime = getTimefromDate(
    new Date(detailedCityInfo.current.sunset * 1000)
  );

  return (
    <>
      <div className="DetailedCityContentContainer">
        <div>
          <div>
            <strong>Date: </strong>
            {cityDate}
          </div>

          <div>
            <strong>Time: </strong>
            {cityTime}
          </div>

          <div>
            <strong>Sunrize: </strong>
            {sunrizeTime}
          </div>

          <div>
            <strong>Sunset: </strong>
            {sunsetTime}
          </div>

          <div>
            <strong>Humidity: </strong>
            {detailedCityInfo.current.humidity} %
          </div>

          <div>
            <strong>Cloudiness: </strong>
            {detailedCityInfo.current.clouds} %
          </div>
        </div>
        <div>
          <div>
            <strong>Sky: </strong>
            <div className="firstLetter">
              {detailedCityInfo.current.weather[0].description}
            </div>
          </div>

          <div>
            <strong>Wind speed: </strong>
            <div className="firstLetter">
              {detailedCityInfo.current.wind_speed} Km/h
            </div>
          </div>

          <div>
            <strong>Visibility: </strong>
            <div className="firstLetter">
              {detailedCityInfo.current.visibility} metre
            </div>
          </div>

          <div>
            <strong>Wind gust: </strong>
            <div className="firstLetter">
              {detailedCityInfo.current.wind_gust} metre/sec
            </div>
          </div>

          <div>
            <strong>Wind degrees: </strong>
            <div className="firstLetter">
              {detailedCityInfo.current.wind_deg} deg
            </div>
          </div>

          <div>
            <strong>Timezone offset: </strong>
            <div className="firstLetter">
              {detailedCityInfo.timezone_offset / 3600} h
            </div>
          </div>
        </div>
      </div>
      <DetailedHourlyInfo hourlyInfo={detailedCityInfo.hourly} />
    </>
  );
};

export default DetailedCityContent;
