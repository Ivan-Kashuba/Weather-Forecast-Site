// weatherSlice

export type weatherInitialState_T = {
  isLoading: boolean;
  citiesNameArr: Array<string>;
  weatherCardError: string;
  detailedCityInfo: detailedDescriptionCity_T | null;
};

export type hourlyInfo = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type hourlyInfoArr = Array<hourlyInfo>;

export type detailedDescriptionCity_T = {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  };
  hourly: hourlyInfoArr;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

export type shortDescriptionCity_T = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  name: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: string;
  };
  timezone: number;
  visibility: number;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
};
