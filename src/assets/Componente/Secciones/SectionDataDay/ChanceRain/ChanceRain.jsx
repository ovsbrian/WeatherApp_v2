import { getAdjustedUTC } from "../../../../Hook/utils";
import { ProgressBar } from "./ProgressBar";

export const Chancerain = ({ hour, chance }) => {
  const horaFormateada = getAdjustedUTC(hour);
  let horaCompleta = horaFormateada;
   let [hora] = horaCompleta.split(":");

  // Determinar si es AM o PM
  const periodo = parseInt(hora, 10) < 12 ? "AM" : "PM";

  // Convertir la hora a formato 12 horas
  if (parseInt(hora, 10) > 12) {
    hora = (parseInt(hora, 10) - 12).toString();
  }

  return (
    <>
      <div className="w-full h-10 flex gap-4 justify-center items-center text-white text-lg font-semibold">
        <span className="w-24">{hora} {periodo}</span>
        <ProgressBar value={chance} />
        <span className="w-20">{chance} %</span>
      </div>
    </>
  );
};
