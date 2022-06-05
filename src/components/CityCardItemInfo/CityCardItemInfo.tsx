import React from "react";
import { shortDescriptionCity_T } from "../../types/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import ShortWeatherContentInfo from "./ShortWeatherContentInfo";
import { useWeather } from "../../hooks/useWeather";

type props_T = {
  city: shortDescriptionCity_T;
  getCityData: () => void;
  cityName: string;
};

const CityCardItemInfo = ({ city, getCityData, cityName }: props_T) => {
  const { deleteCity } = useWeather();

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        <div className="cardMainContent">
          <div className="cardCityNameBlock">
            <div className="cardCityName">
              {city.name},
              <div className="cityCardCountry">{city.sys.country}</div>
            </div>
          </div>
          <div className="weatherHeaderDescription">
            <img
              className="weatherIcon"
              src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
              alt=""
            />
            <div className="cardWeatherTemp">
              {Math.round(city.main.temp)} &#176;С
            </div>
          </div>
        </div>

        <Typography variant="body2" color="text.secondary">
          <ShortWeatherContentInfo city={city} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => getCityData()}>
          Update
        </Button>
        <Button size="small">Details</Button>
        <div className="deleteCardItem" onClick={() => deleteCity(cityName)}>
          <Button size="small">
            <Delete />
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CityCardItemInfo;
