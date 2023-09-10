import { Moon, Sun } from "lucide-react";
import { Card } from "../../SectionData/Card/Card";
import { useWeatherData } from "../../../../Hook/useWeatherData";

export const Twilight = () => {
  const { weatherData } = useWeatherData();

  if (!weatherData || !weatherData.currentWeather || typeof weatherData.currentWeather.sys.sunrise !== 'number' || typeof weatherData.currentWeather.sys.sunset !== 'number') {
    return null;
  }

  const sunriseDate = new Date(weatherData.currentWeather.sys.sunrise * 1000);
  const sunsetDate = new Date(weatherData.currentWeather.sys.sunset * 1000);

  const now = new Date();
  let tiempoPasadoOrestante;
  let esDeDia;

  if (now > sunriseDate && now < sunsetDate) {
    tiempoPasadoOrestante = sunsetDate - now;
    esDeDia = true;
  } else {
    tiempoPasadoOrestante = sunriseDate - now;
    esDeDia = false;
  }

  const horasPasadasOrestantes = Math.floor(tiempoPasadoOrestante / (1000 * 60 * 60));
  
  let refValue;

  if (esDeDia) {
    refValue = `${horasPasadasOrestantes} hours ago`;
  } else {
    refValue = `in ${horasPasadasOrestantes} hours`;
  }

  const sunriseTime = sunriseDate.toLocaleTimeString();
  const sunsetTime = sunsetDate.toLocaleTimeString();

  return (
    <>
      <Card
        date={sunriseTime}
        icon={<Sun />}
        refe={esDeDia ? refValue : `in ${horasPasadasOrestantes} hours`}
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
        refe={esDeDia ? `in ${horasPasadasOrestantes} hours` : refValue}
        tipe={"Sunset"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
      />
    </>
  );
};
