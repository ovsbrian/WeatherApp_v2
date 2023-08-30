import { createContext, useContext, useState } from "react";

const WeatherDataContext = createContext();

export const useWeatherData = () => {
  return useContext(WeatherDataContext);
};

export const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "dc163bbfec6b47a5adb200643233008";

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <WeatherDataContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};
