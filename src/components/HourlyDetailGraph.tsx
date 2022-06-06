import React from "react";
import { hourlyInfoArr } from "../types/types";
import { chooseColor } from "../utils/utils";

type props_T = {
  hourlyArr: hourlyInfoArr;
};

const HourlyDetailGraph = ({ hourlyArr }: props_T) => {
  const temperatureArr = hourlyArr.map((hourlyObj) => {
    return Math.round(hourlyObj.temp);
  });

  return (
    <div className="hourlyGraphContainer">
      {temperatureArr.map((temp, index) => {
        const color = chooseColor(temp);
        const itemStyles = {
          bottom: `${temp * 3}px`,
          left: `${index * 51}px`,
          backgroundColor: color,
          boxShadow: ` 0px 0px 5px ${color}`,
        };
        return (
          <div className="graphTempItem" style={itemStyles}>
            {temp}
          </div>
        );
      })}
    </div>
  );
};

export default HourlyDetailGraph;
