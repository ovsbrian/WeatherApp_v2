 
import { Cloud } from "lucide-react";
import { useWeatherData } from "../../../../Hook/useWeatherData";

export const DataCity  = () => {
 
  const { weatherData } = useWeatherData();
  const getWeatherIcon = (conditionText) => {
    if (conditionText === "Dramatic Cloudy") {
      return <Cloud color="white" size={40} />;
    }
    // Agregar más condiciones y retornar el icono correspondiente para cada estado
    return null; // Si no hay coincidencia de estado, no mostrar ningún icono
  };

  return (
    <div className="App">
    
     
        <div className="weather-info">
          <div>{getWeatherIcon(weatherData.current.condition.text)}</div>
          <div className="flex w-full justify-between items-center text-white">
            <div className="w-2/3">
              <span className="text-5xl ">
                {weatherData.current.temp_c}° C
              </span>
            </div>
            <div className="w-1/3">
              <span className="text-2xl">
                {weatherData.current.condition.text} 
              </span>
            </div>
          </div>
        </div>
       
    </div>
  );
};

 
