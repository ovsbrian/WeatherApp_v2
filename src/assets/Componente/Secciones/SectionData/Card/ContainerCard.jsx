import { CloudRainWind } from "lucide-react";
import { Card } from "./Card";
import { Title } from "@tremor/react";

export const ContainerCards = () => {
  return (
    <>
      <div className="gap-4 flex flex-col w-full justify-center  ">
      <Title color="black">Today overview</Title>
        <div className="flex gap-4">
          <Card
            date={"12km/m"}
            icon={<CloudRainWind />}
            iconTriangle={"red"}
            refe={"2km/h"}
            tipe={"Wind Speed"}
          />
          <Card
            date={"24%"}
            icon={<CloudRainWind />}
            iconTriangle={"blue"}
            refe={"10%"}
            tipe={"Rain Chanse"}
          />
        </div>
        <div className="flex gap-4">
          <Card
            date={"720 hpa"}
            icon={<CloudRainWind />}
            iconTriangle={"blue"}
            refe={"32 hpa"}
            tipe={"Pressure"}
          />
          <Card
            date={"2,3"}
            icon={<CloudRainWind />}
            iconTriangle={"red"}
            refe={"0,3"}
            tipe={"Uv index"}
          />
        </div>
      </div>
    </>
  );
};
