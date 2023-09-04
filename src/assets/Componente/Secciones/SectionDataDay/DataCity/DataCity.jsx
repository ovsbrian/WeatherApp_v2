import { useWeatherData } from "../../../../Hook/useWeatherData";

export const DataCity = () => {
  const { weatherData } = useWeatherData({});

  if (!weatherData) {
    return <div className="text-white ">Loading...</div>;
  }

  const { forecastWeather } = weatherData;
  const { currentWeather } = weatherData;
 
  const { name } = currentWeather;
  const temperatureKelvin = forecastWeather.list[0].main.temp;
  const temperatureCelsius = temperatureKelvin - 273.15;
  const iconDay = forecastWeather.list[0].weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconDay}.png`;
console.log(iconUrl)
  return (
    <div className="App">
      <div className="weather-info">
        <div>
          <img className="h-16" src={iconUrl} alt={name} />
        </div>
        <div className="flex w-full justify-between items-center text-white">
          <div className="w-2/3">
            <span className="text-5xl ">
              {Math.round(temperatureCelsius)}° C
            </span>
          </div>
          <div className="w-1/3">
            <span className="text-2xl">
              {forecastWeather.list[0].weather[0].description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
