import { CloudRainWind } from "lucide-react";
import { Card } from "./Card";

export const ContainerCards = () => {
  return (
    <>
      <div className="md:gap-4 flex flex-col w-full h-64 items-center justify-center my-10">
        <div className="flex justify-start items-start w-full">
          <span className="text-xl font-semibold ">Today overview</span>
        </div>
        <div className="flex gap-4 w-full ">
          <div className=" w-full   flex flex-col gap-1 md:gap-4 ">
            <Card
              date={"12km/m"}
              icon={<CloudRainWind />}
              bg={"bg-[#d8dee6]"}
              iconTriangle={"red"}
              refe={"2km/h"}
              verticalAlignment={"end"}
              tipe={"Wind Speed"}
              h={"h-40 md:h-20"}
            />
            <Card
              date={"24%"}
              verticalAlignment={"end"}
              icon={<CloudRainWind />}
              iconTriangle={"blue"}
              bg={"bg-[#d8dee6]"}
              refe={"10%"}
              tipe={"Rain Chanse"}
              h={"h-40 md:h-20"}
            />
          </div>
          <div className=" w-full  flex flex-col gap-1 md:gap-4 ">
            <Card
              date={"720 hpa"}
              icon={<CloudRainWind />}
              iconTriangle={"blue"}
              refe={"32 hpa"}
              verticalAlignment={"end"}
              bg={"bg-[#d8dee6]"}
              h={"h-40 md:h-20"}
              tipe={"Pressure"}
            />
            <Card
              date={"2,3"}
              icon={<CloudRainWind />}
              iconTriangle={"red"}
              refe={"0,3"}
              tipe={"Uv index"}
              h={"h-40 md:h-20"}
              verticalAlignment={"end"}
              bg={"bg-[#d8dee6]"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
