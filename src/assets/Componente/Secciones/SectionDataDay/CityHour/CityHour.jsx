import { getAdjustedUTC } from "../../../../Hook/utils";

export const CityHour = ({ city, country, hour }) => {
  const horaFormateada = getAdjustedUTC(hour)
 
  return (
    <>
      <div className="flex w-full mb-4">
        <div className="w-full">
          <div className="flex justify-start items-start w-full">
            <span className="text-xl font-semibold text-white">{city}</span>
          </div>
          <span className="text-white opacity-60">{country}</span>
        </div>
        <div className="flex justify-end items-center w-full">
          <span className="text-xl text-white">{horaFormateada} 🕔</span>
        </div>
      </div>
    </>
  );
};
