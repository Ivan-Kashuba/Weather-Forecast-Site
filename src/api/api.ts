import axios from "axios";

const apiKey = "9fc4c6b0c4070f97e53a26704f3409da";
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const weatherAPI = {
  getCityCurrentWeather(cityName: string) {
    return instance.get(`weather?q=${cityName}&appid=${apiKey}&units=metric`);
  },

  getDetailedCityWeather(lat: number, lon: number) {
    return instance.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely&units=metric&appid=${apiKey}`
    );
  },
};

