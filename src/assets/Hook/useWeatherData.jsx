import { createContext, useContext, useState } from "react";

const WeatherDataContext = createContext();
// ...

export const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "2ed426d0a151e32f759d3a32e95b2a7d";

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
      );
      const data = await response.json();

      // Obtén la latitud y longitud del primer fetch
      const { coord } = data;
      if (coord) {
        const { lat, lon } = coord;

        // Realiza el segundo fetch utilizando la latitud y longitud
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        const forecastData = await forecastResponse.json();

        // Almacena tanto los datos del clima actual como del pronóstico en el estado

        setWeatherData({ currentWeather: data, forecastWeather: forecastData });
      } else {
        console.error(
          "Coordenadas no encontradas en la respuesta del primer fetch."
        );
      }
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

// ...

export const useWeatherData = () => {
  return useContext(WeatherDataContext);
};
