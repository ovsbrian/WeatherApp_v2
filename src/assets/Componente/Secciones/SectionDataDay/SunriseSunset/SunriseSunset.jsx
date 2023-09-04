import { Moon, Sun } from "lucide-react";
import { Card } from "../../SectionData/Card/Card";
import { useWeatherData } from "../../../../Hook/useWeatherData";

export const Twilight = () => {
  const { weatherData } = useWeatherData();
  
 
  if (!weatherData || !weatherData.currentWeather || typeof weatherData.currentWeather.sys.sunrise !== 'number' || typeof weatherData.currentWeather.sys.sunset !== 'number') {
    return null; // Mostrar nada si no hay datos disponibles o las propiedades son incorrectas
  }

 
  const sunriseDate = new Date(weatherData.currentWeather.sys.sunrise * 1000); // Multiplicar por 1000 para convertir segundos a milisegundos
  const sunsetDate = new Date(weatherData.currentWeather.sys.sunset * 1000);

  // Formatear las fechas en horas y minutos
  const sunriseTime = sunriseDate.toLocaleTimeString(); // Hora del amanecer
  const sunsetTime = sunsetDate.toLocaleTimeString();

  return (
    <>
      <Card
        date={sunriseTime}
        icon={<Sun />}
        refe={"in 6 hours"}
        tipe={"Sunrise"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
        h={"md:h-24"}
      />
      <Card
        date={sunsetTime}
        h={"md:h-24"}
        icon={<Moon />}
        refe={"in 9 hours"}
        tipe={"Sunset"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
      />
    </>
  );
};
