import { Chancerain } from "./ChanceRain/ChanceRain";
import { CityHour } from "./CityHour/CityHour";
import { DataCity } from "./DataCity/DataCity";
import { Twilight } from "./SunriseSunset/SunriseSunset";

export const SectionDay = () => {
  return (
    <>
      <div className="pt-4 px-8  ">
        <CityHour
          city={"Pando"}
          country={"Canelones, Uruguay"}
          hour={"12:40 PM"}
        />
        <DataCity estado={"Dramatic Cloudy"} temp={"20"} />
        <div className="my-4">
          <hr className="w-full bg-white opacity-50"></hr>
        </div>
        <div className="flex flex-col gap-4 items-start w-full bg">
          <span className="text-xl font-semibold text-white ">
            Chance of rain
          </span>
          <Chancerain hour={2} chance={20} />
          <Chancerain hour={3} chance={40} />
          <Chancerain hour={4} chance={60} />
          <Chancerain hour={5} chance={70} />
        </div>
        <div className="w-full flex flex-col gap-2 mt-1  ">
          <span className="text-xl font-semibold text-white ">
            Sunrise & Sunset
          </span>
          <div className="flex flex-col gap-2 w-full">
            <Twilight />
          </div>
        </div>
      </div>
    </>
  );
};
