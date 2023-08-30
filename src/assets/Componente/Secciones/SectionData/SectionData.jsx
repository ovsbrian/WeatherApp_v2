import { ContainerCards } from "./Card/ContainerCard";
import { Grafica } from "./Grafica/Grafica";
import { NavTop } from "./NavTop/NavTop";

export const SectionData = () => {
  return (
    <>
      <div className="p-4 flex flex-col justify-around  h-full">
        <NavTop />
        <ContainerCards />
        <Grafica />
      </div>
    </>
  );
};
