import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  detailedDescriptionCity_T,
  weatherInitialState_T,
} from "../../types/types";

const initialState: weatherInitialState_T = {
  isLoading: false,
  citiesNameArr: ["Slavske", "Chop", "Zaporizhzhia"],
  weatherCardError: "",
  detailedCityInfo: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherLoadingTrue(state) {
      state.isLoading = true;
    },

    setWeatherLoadingFalse(state) {
      state.isLoading = false;
    },

    addCityCard(state, action: PayloadAction<string>) {
      state.citiesNameArr.push(action.payload);
    },

    getErrorWeatherCardInfo(state, action: PayloadAction<string>) {
      state.weatherCardError = action.payload;
    },

    removeUncorrectCity(state, action: PayloadAction<number>) {
      state.citiesNameArr.splice(action.payload, 1);
    },

    deleteCity(state, action: PayloadAction<string>) {
      const sortedArr = state.citiesNameArr.filter((cityName: string) => {
        if (cityName !== action.payload) {
          return cityName;
        }
      });
      state.citiesNameArr = sortedArr;
    },

    setDetailedCityInfo(
      state,
      action: PayloadAction<detailedDescriptionCity_T>
    ) {
      state.detailedCityInfo = action.payload;
    },
  },
});

export const {
  setWeatherLoadingTrue,
  setWeatherLoadingFalse,
  addCityCard,
  getErrorWeatherCardInfo,
  removeUncorrectCity,
  deleteCity,
  setDetailedCityInfo,
} = weatherSlice.actions;

export default weatherSlice.reducer;
