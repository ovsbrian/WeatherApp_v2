import { CloudRainWind } from "lucide-react";
import { Card } from "./Card/Card";
import { Grafica } from "./Grafica/Grafica";
import { ContainerCards } from "./Card/ContainerCard";
import { NavTop } from "./NavTop/NavTop";

export const SectionData = () => {
  return (
    <>
      <div className="p-4 flex flex-col h-full gap-4">
        <NavTop/>
        <ContainerCards/>
        <Grafica />
      </div>
    </>
  );
};
