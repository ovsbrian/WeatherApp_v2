import { Search, User } from "lucide-react";
import { IconCuadrado } from "./IconCuadrado";
import { useWeatherData } from "../../../../Hook/useWeatherData";
import { useState } from "react";

export const NavTop = () => {
  const [city, setCity] = useState("");
  const { fetchWeatherData } = useWeatherData();

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
      <div className="w-full  md:flex flex flex-col md:items-center md:flex-row justify-between gap-4 my-1">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Jaunary 2022</span>
          <span className="text">Thursday, Jan 4, 2022</span>
        </div>
        <div className="flex mx-2  ">
          <div className="flex flex-row-reverse items-start ml-2 w-52  rounded">
            <input
              className="w-60 h-10 pl-2  bg-[rgb(214,232,241,0.51)]"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyUp={handleKeyPress}
            ></input>
            <button
              onClick={handleSearch}
              className=" w-10   h-10 flex items-center justify-center bg-[rgb(214,232,241,0.51)]"
            >
              <Search className="m-2" size={20} />
            </button>
          </div>
          <div className="flex gap-4 px-4">
            <IconCuadrado icon={<User />} />
            <IconCuadrado icon={<User />} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
