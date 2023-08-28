import { ContainerCards } from "./Card/ContainerCard";
import { Grafica } from "./Grafica/Grafica";
import { NavTop } from "./NavTop/NavTop";

export const SectionData = () => {
  return (
    <>
      <div className="p-4 flex flex-col h-full gap-4 justify-center items-center">
        <NavTop />
        <ContainerCards />
        <Grafica />
      </div>
    </>
  );
};
