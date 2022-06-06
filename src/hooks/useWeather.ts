import { useAppDispatch } from "./useAppDispatch";
import { useSelector } from "react-redux";
import {
  getDetailedCityInfo_S,
  getWeatherCardError_S,
  getWeatherCardsArr_S,
  isWeatherCardLoading_S,
} from "../store/selectors/weather-selectors";
import { useCallback } from "react";
import {
  addCityCard,
  deleteCity,
  getErrorWeatherCardInfo,
  removeUncorrectCity,
  setWeatherLoadingFalse,
  setWeatherLoadingTrue,
} from "../store/slices/weatherSlice";
import { getDetailedCityInfo } from "../store/thunks/thunks";

export const useWeather = () => {
  const dispatch = useAppDispatch();

  const _addNewCityCard = useCallback(
    (cityName: string) => {
      return dispatch(addCityCard(cityName));
    },
    [dispatch]
  );

  const _getErrorWeatherCardInfo = useCallback(
    (error: string) => {
      return dispatch(getErrorWeatherCardInfo(error));
    },
    [dispatch]
  );

  const _setWeatherLoadingFalse = useCallback(() => {
    dispatch(setWeatherLoadingFalse());
  }, [dispatch]);

  const _setWeatherLoadingTrue = useCallback(() => {
    dispatch(setWeatherLoadingTrue());
  }, [dispatch]);

  const _removeUncorrectCity = useCallback(
    (cityIndex: number) => {
      dispatch(removeUncorrectCity(cityIndex));
    },
    [dispatch]
  );

  const _deleteCity = useCallback(
    (cityName: string) => {
      dispatch(deleteCity(cityName));
    },
    [dispatch]
  );

  const _getDetailedCityInfo = useCallback(
    (lat: number, lon: number) => {
      dispatch(getDetailedCityInfo(lat, lon));
    },
    [dispatch]
  );

  const citiesNameArr = useSelector(getWeatherCardsArr_S);
  const cityCardError = useSelector(getWeatherCardError_S);
  const isLoading = useSelector(isWeatherCardLoading_S);
  const detailedCityInfo = useSelector(getDetailedCityInfo_S);

  return {
    citiesNameArr: citiesNameArr,
    cityCardError,
    isLoading,
    detailedCityInfo,
    addNewCityCard: _addNewCityCard,
    getErrorWeatherCardInfo: _getErrorWeatherCardInfo,
    setWeatherLoadingFalse: _setWeatherLoadingFalse,
    setWeatherLoadingTrue: _setWeatherLoadingTrue,
    removeUncorrectCity: _removeUncorrectCity,
    deleteCity: _deleteCity,
    getDetailedCityInfo: _getDetailedCityInfo,
  };
};
