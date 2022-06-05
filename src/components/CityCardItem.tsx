import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { weatherAPI } from "../api/api";
import { shortDescriptionCity_T } from "../types/types";
import CityCardItemInfo from "./CityCardItemInfo/CityCardItemInfo";

type props_T = {
  cityName: string;
};

const CityCardItem = ({ cityName }: props_T) => {
  const { citiesNameArr, removeUncorrectCity } = useWeather();

  const deleteUnrealCities = (cityName: string) => {
    citiesNameArr.find((city: string, index: number) => {
      if (city === cityName) {
        removeUncorrectCity(index);
      }
    });
  };

  const [city, setCity] = useState<shortDescriptionCity_T>();

  const {
    getErrorWeatherCardInfo,
    setWeatherLoadingFalse,
    setWeatherLoadingTrue,
  } = useWeather();

  const getCityData = async () => {
    setWeatherLoadingFalse();
    getErrorWeatherCardInfo("");
    try {
      await setWeatherLoadingTrue();
      const response = await weatherAPI.getCityCurrentWeather(cityName);
      setCity(response.data);
      setWeatherLoadingFalse();
    } catch (err: any) {
      getErrorWeatherCardInfo(err.response.data.message);
      deleteUnrealCities(cityName);
      setWeatherLoadingFalse();
    }
  };

  useEffect(() => {
    getCityData();
  }, [cityName]);

  return (
    <div>
      {city ? (
        <CityCardItemInfo
          city={city}
          getCityData={getCityData}
          cityName={cityName}
        />
      ) : null}
    </div>
  );
};

export default CityCardItem;
