import { Moon, Sun } from "lucide-react";
import { Card } from "../../SectionData/Card/Card";
import { useWeatherData } from "../../../../Hook/useWeatherData";
 
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
  
  const sunrise =  new Date(weatherData.currentWeather.sys.sunrise * 1000);
  const sunset = new Date(weatherData.currentWeather.sys.sunset * 1000);
  const timezoneS = weatherData.currentWeather.timezone * 1000;
  
  sunrise.setTime(sunrise.getTime() + sunrise.getTimezoneOffset() * 60 * 1000 + timezoneS);
  sunset.setTime(sunset.getTime() + sunset.getTimezoneOffset() * 60 * 1000 + timezoneS);
  let options = { hour: '2-digit', minute: '2-digit' };
  let sunsireTime = sunrise.toLocaleTimeString('es-UY', options)
  let sunsetTime = sunset.toLocaleTimeString('es-UY', options)




  return (
    <>
      <Card
        date={sunsireTime}
        icon={<Sun />}
        tipe={"Sunrise"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
        h={"md:h-20"}
      />
      <Card
        date={sunsetTime}
        h={"md:h-20"}
        icon={<Moon />}
        tipe={"Sunset"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
      />
    </>
  );
};
