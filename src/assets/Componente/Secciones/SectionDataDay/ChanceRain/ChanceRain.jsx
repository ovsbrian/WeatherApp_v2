import { getAdjustedUTC } from "../../../../Hook/utils";
import { ProgressBar } from "./ProgressBar";

export const Chancerain = ({hour, chance}) => {
  const horaFormateada = getAdjustedUTC(hour)
  let horaCompleta = horaFormateada;
  let [hora] = horaCompleta.split(":");
 
  return (
    <>
      <div className="w-full h-10 flex gap-4 justify-center items-center text-white text-lg font-semibold">
        <span className="w-20">{hora} PM</span>
        <ProgressBar value={chance} />
        <span className="w-20">{chance} %</span>
      </div>
      
    </>
  );
};
