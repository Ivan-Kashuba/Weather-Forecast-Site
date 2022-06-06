import React from "react";
import "./App.scss";
import { useWeather } from "./hooks/useWeather";
import InputSearchItem from "./components/InputSearchItem";
import CitiesCards from "./components/CitiesCards";
import { Route, Routes } from "react-router-dom";
import DetailedCity from "./pages/DetailedCity";

const App = () => {
  const { citiesNameArr } = useWeather();

  return (
    <Routes>
      <Route
        path=""
        element={
          <div className="container">
            <InputSearchItem />
            <CitiesCards citiesNameArr={citiesNameArr} />
          </div>
        }
      />
      <Route path="/detailed/:cityName" element={<DetailedCity />} />
    </Routes>
  );
};

export default App;
