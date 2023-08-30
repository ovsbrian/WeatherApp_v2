import { CloudRainWind } from "lucide-react";
import { Card } from "./Card";

export const ContainerCards = () => {
  return (
    <>
      <div className="gap-4 flex flex-col w-full items-center  ">
        <div className="flex justify-start items-start w-full">
          <span className="text-xl font-semibold ">Today overview</span>
        </div>
        <div className="flex gap-4">
          <Card
            date={"12km/m"}
            icon={<CloudRainWind />}
            bg={"bg-[#EEF2F4]"}
            iconTriangle={"red"}
            refe={"2km/h"}
            verticalAlignment={"end"}
            tipe={"Wind Speed"}
            h={"h-20"}
          />
          <Card
            date={"24%"}
            verticalAlignment={"end"}
            icon={<CloudRainWind />}
            iconTriangle={"blue"}
            bg={"bg-[#EEF2F4]"}
            refe={"10%"}
            tipe={"Rain Chanse"}
            h={"h-20"}
          />
        </div>
        <div className="flex gap-4">
          <Card
            date={"720 hpa"}
            icon={<CloudRainWind />}
            iconTriangle={"blue"}
            refe={"32 hpa"}
            verticalAlignment={"end"}
            bg={"bg-[#EEF2F4]"}
            h={"h-20"}
            tipe={"Pressure"}
          />
          <Card
            date={"2,3"}
            icon={<CloudRainWind />}
            iconTriangle={"red"}
            refe={"0,3"}
            tipe={"Uv index"}
            h={"h-20"}
            verticalAlignment={"end"}
            bg={"bg-[#EEF2F4]"}
          />
        </div>
      </div>
    </>
  );
};
