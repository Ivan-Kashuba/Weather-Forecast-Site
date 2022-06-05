import { AppStateType } from "../store";

export const getWeatherCardsArr = (state: AppStateType) => {
  return state.weatherSlice.citiesNameArr;
};

export const getWeatherCardError = (state: AppStateType) => {
  return state.weatherSlice.weatherCardError;
};

export const isWeatherCardLoading = (state: AppStateType) => {
  return state.weatherSlice.isLoading;
};
