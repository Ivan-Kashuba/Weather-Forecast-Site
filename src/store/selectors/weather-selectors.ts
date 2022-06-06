import { AppStateType } from "../store";

export const getWeatherCardsArr_S = (state: AppStateType) => {
  return state.weatherSlice.citiesNameArr;
};

export const getWeatherCardError_S = (state: AppStateType) => {
  return state.weatherSlice.weatherCardError;
};

export const isWeatherCardLoading_S = (state: AppStateType) => {
  return state.weatherSlice.isLoading;
};

export const getDetailedCityInfo_S = (state: AppStateType) => {
  return state.weatherSlice.detailedCityInfo;
};
