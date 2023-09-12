import { useWeatherData } from "../../../Hook/useWeatherData";
import { Chancerain } from "./ChanceRain/ChanceRain";
import { CityHour } from "./CityHour/CityHour";
import {  DataCity } from "./DataCity/DataCity";
import { Twilight } from "./SunriseSunset/SunriseSunset";

export const SectionDay = () => {
   
  const { weatherData } = useWeatherData();

 
  if (!weatherData) {
    return null;  
  }
    
  const { forecastWeather } = weatherData;
  const { currentWeather } = weatherData;
  const cityName = currentWeather.name
  const countryName = currentWeather.sys.country
  const timezoneOffset = currentWeather.timezone
 
  

  return (
    <>
      <div className="pt-4 px-4  ">
        <CityHour
          city={cityName}
          country={countryName}
          hour={timezoneOffset}
        />
        <DataCity estado={"Dramatic Cloudy"} temp={"20"} />
        <div className="my-4">
          <hr className="w-full bg-white opacity-50"></hr>
        </div>
        <div className="flex flex-col gap-4 items-start w-full ">
          <span className="text-xl font-semibold text-white ">
            Chance of rain
          </span>
          <Chancerain hour={timezoneOffset} chance={forecastWeather.list[0].pop  * 100} />
          <Chancerain hour={timezoneOffset + 3 * 3600} chance={forecastWeather.list[1].pop  * 100} />
        </div>
        <div className="w-full flex flex-col gap-2 mt-4 ">
          <span className="text-xl font-semibold text-white ">
            Sunrise & Sunset
          </span>
          <div className="flex flex-col gap-4 md:gap-2 w-full mb-4">
            <Twilight  hour={timezoneOffset}/>
          </div>
        </div>
      </div>
    </>
  );
};
