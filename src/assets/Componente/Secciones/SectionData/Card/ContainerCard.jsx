import { CloudRainWind, ThermometerSnowflake, ThermometerSun, Waves } from "lucide-react";
import { Card } from "./Card";
import { useWeatherData } from "../../../../Hook/useWeatherData";
import { convertKelvinToCelsius, convertMsToKmh } from "../../../../Hook/utils";
import { DataNullImg } from "../DataNull";

export const ContainerCards = () => {
  const { weatherData } = useWeatherData();

  if (!weatherData) {
    return <DataNullImg/>;
  }
  const { currentWeather } = weatherData;

 

  return (
    <>
      <div className="md:gap-4 flex flex-col w-full h-52 items-center justify-center my-6 gap-4">
        <div className="flex justify-start items-start w-full">
          <span className="text-xl font-semibold ">Today overview</span>
        </div>
        <div className="flex gap-4 w-full ">
          <div className=" w-full   flex flex-col gap-1 md:gap-4 ">
            <Card
              date={Math.round(convertMsToKmh(currentWeather.wind.speed))  + " km/m"}
              icon={<CloudRainWind />}
              bg={"bg-[#d8dee6]"}
              verticalAlignment={"end"}
              tipe={"Wind Speed"}
              h={"h-40 md:h-20"}
            />
            <Card
              date={
                Math.round(
                  convertKelvinToCelsius(currentWeather.main.temp_max)
                ) + "° C"
              }
              verticalAlignment={"end"}
              icon={<ThermometerSun />}
              bg={"bg-[#d8dee6]"}
              tipe={"Temp Max"}
              h={"h-40 md:h-20"}
            />
          </div>
          <div className=" w-full  flex flex-col gap-1 md:gap-4 ">
            <Card
              date={currentWeather.main.pressure + " hPa"}
              icon={<Waves />}
              verticalAlignment={"end"}
              bg={"bg-[#d8dee6]"}
              h={"h-40 md:h-20"}
              tipe={"Pressure"}
            />
            <Card
              date={
                Math.round(
                  convertKelvinToCelsius(currentWeather.main.temp_min)
                ) + "° C"
              }
              icon={<ThermometerSnowflake />}
              tipe={"Temp Min"}
              h={"h-40 md:h-20"}
              verticalAlignment={"end"}
              bg={"bg-[#d8dee6]"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
