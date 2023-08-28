 
import { CityHour } from "./CityHour/CityHour";
import { DataCity } from "./DataCity/DataCity";
 
 

export const SectionDay = () => {
  return (
    <>
      <div className="pt-4 px-8 ">
        <CityHour
          city={"Pando"}
          country={"Canelones, Uruguay"}
          hour={"12:40 PM"}
        />
        <DataCity estado={"Dramatic Cloudy"} temp={"20"} />
        <div className="my-8">
          <hr className="w-full bg-white opacity-50"></hr>
        </div>
        <div className="flex justify-start items-start w-full">
            <span className="text-xl font-semibold text-white ">Chance of rain</span>
          </div>
     
      </div>
    </>
  );
};
