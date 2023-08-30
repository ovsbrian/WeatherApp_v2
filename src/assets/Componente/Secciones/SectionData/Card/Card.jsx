import { Triangle } from "lucide-react";

export const Card = ({ icon, tipe, date, iconTriangle, refe, verticalAlignment, bg,colorText, radius, h  }) => {
  const alignmentClass = verticalAlignment === "end" ? "items-end" : "items-center";
  return (
    <> 
      <div className={`flex  items-center justify-start p-4 gap-4 w-62 ${h}  ${colorText}  ${bg} ${radius}`}>
        <div className="  flex items-center w-5">
          <span>{icon}</span>
        </div>
        <div className="w-20">
          <div>
            <span className="text-sm opacity-60">{tipe}</span>
          </div>
          <div>
            <span className="text-xl font-semibold">{date}</span>
          </div>
        </div>
        <div className={`flex justify-center ${alignmentClass} gap-1 w-20 h-full`}>
          {iconTriangle ? (
            <span className="mb-[5px]">
              <Triangle size={10} color={iconTriangle} />
            </span>
          ) : (
            ""
          )}
          <span className="text-sm opacity-60">{refe}</span>
        </div>
      </div>
    </>
  );
};
