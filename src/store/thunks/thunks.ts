import { AppDispatch } from "../store";
import {
  getErrorWeatherCardInfo,
  setDetailedCityInfo,
} from "../slices/weatherSlice";
import { weatherAPI } from "../../api/api";

export const getDetailedCityInfo =
  (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await weatherAPI.getDetailedCityWeather(lat, lon);
      dispatch(setDetailedCityInfo(response.data));
    } catch (err) {
      dispatch(getErrorWeatherCardInfo(err as string));
    }
  };
