import { Bell, Search, User } from "lucide-react";
import { IconCuadrado } from "./IconCuadrado";
import { useWeatherData } from "../../../../Hook/useWeatherData";
import { useState } from "react";
import {
  adjustTimezone,
  getDayName,
  getMonthName,
  getMonthAvrName,
} from "../../../../Hook/utils";
import { SearchInput } from "./SearchInput";
import { ContainerSearchNull } from "./ContainerSearchNull";

export const NavTop = () => {
  const [city, setCity] = useState("");
  const { fetchWeatherData } = useWeatherData();
  const { weatherData } = useWeatherData();
  if (!weatherData) return <ContainerSearchNull />;
  const { currentWeather } = weatherData;

  let currentDate = new Date();
  let timezoneS = currentWeather.timezone;

  // Ajustar la fecha y hora actuales a la zona horaria especificada
  currentDate = adjustTimezone(currentDate, timezoneS);

  // Obtener el nombre del día de la semana y del mes
  let dayName = getDayName(currentDate);
  let monthName = getMonthName(currentDate);
  let monthAvrName = getMonthAvrName(currentDate);

  const handleSearch = () => {
    fetchWeatherData(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-full md:flex flex flex-col md:items-center md:flex-row justify-between gap-4 my-1">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            {monthName} {currentDate.getFullYear()}
          </span>
          <span className="text">
            {dayName}, {monthAvrName} {currentDate.getDate()},{" "}
            {currentDate.getFullYear()}
          </span>
        </div>
        <div className="flex mx-2">
        <SearchInput />
          <div className="flex gap-4 px-4">
            <IconCuadrado icon={<User />} />
            <IconCuadrado icon={<Bell />} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
