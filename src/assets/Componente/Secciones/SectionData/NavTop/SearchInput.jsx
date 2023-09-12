import { useState } from "react";
import { Search } from "lucide-react";
import { useWeatherData } from "../../../../Hook/useWeatherData";

export const SearchInput = () => {
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
    <div className="flex flex-row-reverse items-start ml-2 w-52 rounded">
      <input
        className="w-60 h-10 pl-2 bg-[rgb(214,232,241,0.51)]"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyUp={handleKeyPress}
      ></input>
      <button
        onClick={handleSearch}
        className="w-10 h-10 flex items-center justify-center bg-[rgb(214,232,241,0.51)]"
      >
        <Search className="m-2" size={20} />
      </button>
    </div>
  );
};
