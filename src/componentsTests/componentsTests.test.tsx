import React from "react";
import { render, screen } from "@testing-library/react";
import HourlyDetailGraph from "../components/HourlyDetailGraph";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import CityCardItemInfo from "../components/CityCardItemInfo/CityCardItemInfo";
import { BrowserRouter } from "react-router-dom";

describe("HourlyDetailGraph component", () => {
  render(
    <HourlyDetailGraph
      hourlyArr={[
        {
          humidity: 12,
          pop: 32,
          pressure: 1232,
          temp: 18,
        } as any,
      ]}
    />
  );
  test("Temperature value will be showed", () => {
    expect(screen.getByText(18)).toBeInTheDocument();
  });
});

describe("CityCardItem component", () => {
  const city = {
    name: "London",
    sys: {
      country: "Europe",
    },
    weather: [{ icon: "iconName" }],
    main: {
      temp: 25,
    },
    coord: {
      lat: 25,
      lon: 43,
    },
    wind: {
      speed: 54,
    },
  };
  const getCityData = jest.fn();

  render(
    <BrowserRouter>
      <Provider store={store}>
        <CityCardItemInfo
          cityName="London"
          getCityData={getCityData}
          city={city as any}
        />
      </Provider>
    </BrowserRouter>
  );

  test("CityCardItem render success", () => {
    expect(screen.getByText("Humidity:")).toBeInTheDocument();
  });

  test("City name value is correct", () => {
    expect(screen.getByText("London,")).toBeInTheDocument();
  });

  test("sys country value is correct", () => {
    expect(screen.getByText("Europe")).toBeInTheDocument();
  });
});
