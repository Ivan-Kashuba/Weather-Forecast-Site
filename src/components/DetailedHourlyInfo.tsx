import React from "react";
import { hourlyInfoArr } from "../types/types";
import HourlyDetailItem from "./HourlyDetailItem";
import HourlyDetailGraph from "./HourlyDetailGraph";

type props_T = {
  hourlyInfo: hourlyInfoArr;
};

const DetailedHourlyInfo = ({ hourlyInfo }: props_T) => {
  const hourlyArr = [];

  for (let i = 0; i < 8; i++) {
    hourlyArr.push(hourlyInfo[i]);
  }

  return (
    <>
      <div className="hourlyInfoContainer">
        <div className="hourlyInfoMainText">Closest Hourly Forecast</div>
        <div className="hourlyItemContainer">
          {hourlyArr.map((hourlyItem, index) => {
            return <HourlyDetailItem hourlyItem={hourlyItem} key={index} />;
          })}
        </div>
      </div>
      <HourlyDetailGraph hourlyArr={hourlyArr} />
    </>
  );
};

export default DetailedHourlyInfo;
