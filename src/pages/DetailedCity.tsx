import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DetailedCityContent from "../components/DetailedCityContent";

type Location_T = {
  lat: number;
  lon: number;
};

const DetailedCity = () => {
  const navigate = useNavigate();

  const { cityName } = useParams();
  const { detailedCityInfo, getDetailedCityInfo } = useWeather();

  const { lat, lon } = useLocation().state as Location_T;

  useEffect(() => {
    getDetailedCityInfo(lat, lon);
  }, []);

  return detailedCityInfo ? (
    <Card sx={{ maxWidth: 1100 }} className="detailedCityInfo">
      <CardContent>
        <div className="cardMainContent">
          <div className="cardCityNameBlock">
            <div className="cardCityName">{cityName},</div>
            <div className="detailTimeZone">{detailedCityInfo.timezone}</div>
          </div>
          <div className="weatherHeaderDescription">
            <div className="cityDetailsWeatherStatus">
              {detailedCityInfo.current.weather[0].main}
            </div>
            <img
              className="weatherIconDetails"
              src={`http://openweathermap.org/img/w/${detailedCityInfo.current.weather[0].icon}.png`}
              alt=""
            />
            <div className="cardWeatherTemp">
              {Math.round(detailedCityInfo.current.temp)} &#176;С
            </div>
          </div>
        </div>

        <Typography variant="body1" color="text.secondary">
          <DetailedCityContent detailedCityInfo={detailedCityInfo} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={() => getDetailedCityInfo(lat, lon)}>
          Update
        </Button>

        <Button size="large" onClick={() => navigate("/")}>
          Back to cards
        </Button>
      </CardActions>
    </Card>
  ) : (
    <div>Cant find detailed city info</div>
  );
};

export default DetailedCity;
