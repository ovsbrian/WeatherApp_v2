import { Moon, Sun } from "lucide-react";
import { Card } from "../../SectionData/Card/Card";
import { useWeatherData } from "../../../../Hook/useWeatherData";
import { adjustTimezone, getDayName, getMonthName } from "../../../../Hook/utils";
 

export const Twilight = ({ hour }) => {
  const { weatherData } = useWeatherData();

  if (
    !weatherData ||
    !weatherData.currentWeather ||
    typeof weatherData.currentWeather.sys.sunrise !== "number" ||
    typeof weatherData.currentWeather.sys.sunset !== "number"
  ) {
    return null;
  }
  
  let currentDate = new Date();
  let timezoneS = weatherData.currentWeather.timezone;

  // Ajustar la fecha y hora actuales a la zona horaria especificada
  currentDate = adjustTimezone(currentDate, timezoneS);

  // Obtener el nombre del día de la semana y del mes
  let dayName = getDayName(currentDate);
  let monthName = getMonthName(currentDate);
 
  return (
    <>
      <Card
        date={dayName}
        icon={<Sun />}
        tipe={"Day of the week"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
        h={"md:h-20"}
      />
      <Card
        date={monthName}
        h={"md:h-20"}
        icon={<Moon />}
        tipe={"Month"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
      />
    </>
  );
};
