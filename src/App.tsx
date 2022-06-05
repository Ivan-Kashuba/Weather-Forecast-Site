import React, { useEffect } from "react";
import "./App.scss";
import { useWeather } from "./hooks/useWeather";
import InputSearchItem from "./components/InputSearchItem";
import CitiesCards from "./components/CitiesCards";

const App = () => {
  const { citiesNameArr } = useWeather();

  return (
    <div className="container">
      <InputSearchItem />
      <CitiesCards citiesNameArr={citiesNameArr} />
    </div>
  );
};

export default App;
