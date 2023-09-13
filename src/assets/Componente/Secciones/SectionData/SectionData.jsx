import { useWeatherData } from "../../../Hook/useWeatherData";
import { ContainerCards } from "./Card/ContainerCard";
import { Grafica } from "./Grafica/Grafica";
import { NavTop } from "./NavTop/NavTop";

export const SectionData = () => {
     
  const { weatherData } = useWeatherData();
 
    
  return (
    <>
      <div className="p-4 flex flex-col gap-8 md:gap-0 justify-center  ">
        <NavTop />
        <ContainerCards />
        <div className={`h-64 ${weatherData ? 'block' : 'hidden'}`}>
          <Grafica />
        </div>
      </div>
    </>
  );
};
