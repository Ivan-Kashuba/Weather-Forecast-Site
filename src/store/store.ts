import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";

export const rootReducer = combineReducers({
  weatherSlice,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState") as string)
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
