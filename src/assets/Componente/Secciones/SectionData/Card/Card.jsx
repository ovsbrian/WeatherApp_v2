import { Triangle } from "lucide-react";
// million-ignore
export const Card = ({
  icon,
  tipe,
  date,
  verticalAlignment,
  bg,
  colorText,
  radius,
  h,
}) => {
  const alignmentClass =
    verticalAlignment === "end" ? "items-end" : "items-center";
  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center justify-start p-4 gap-4 w-62 ${h}  ${colorText}  ${bg} ${radius}`}
      >
        <div className="flex items-center w-5">
          <span>{icon}</span>
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-none">
          <div className="w-full">
            <span className="text-lg opacity-60">{tipe}</span>
          </div>
          <div>
            <span className="text-xl font-semibold w-full">{date}</span>
          </div>
        </div>
        <div
          className={`flex justify-center md:justify-end w-full ${alignmentClass} gap-1 w-20 h-full`}
        ></div>
      </div>
    </>
  );
};
