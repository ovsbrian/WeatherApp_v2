import { Cloud } from "lucide-react";

export const DataCity = ({estado, temp}) => {
let icon = ''
if (estado == 'Dramatic Cloudy' ? icon = <Cloud color="white" size={40}/> : icon =  '')

// hacer para que cada estado se vea un icono diferente

  return (
    <>
      <div>
        <div>
          {icon}
        </div>
        <div className="flex w-full justify-between items-center text-white">
          <div className="w-2/3">
            <span className="text-5xl ">{temp}° C</span>
          </div>
          <div className="w-1/3">
            <span className="text-2xl  ">{estado}</span>
          </div>
        </div>
      </div>
    </>
  );
};
