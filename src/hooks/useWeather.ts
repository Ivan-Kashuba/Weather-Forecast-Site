import { useAppDispatch } from "./useAppDispatch";
import { useSelector } from "react-redux";
import {
  getWeatherCardError,
  getWeatherCardsArr,
  isWeatherCardLoading,
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

  const citiesNameArr = useSelector(getWeatherCardsArr);
  const cityCardError = useSelector(getWeatherCardError);
  const isLoading = useSelector(isWeatherCardLoading);

  return {
    citiesNameArr: citiesNameArr,
    cityCardError,
    isLoading,
    addNewCityCard: _addNewCityCard,
    getErrorWeatherCardInfo: _getErrorWeatherCardInfo,
    setWeatherLoadingFalse: _setWeatherLoadingFalse,
    setWeatherLoadingTrue: _setWeatherLoadingTrue,
    removeUncorrectCity: _removeUncorrectCity,
    deleteCity: _deleteCity,
  };
};
