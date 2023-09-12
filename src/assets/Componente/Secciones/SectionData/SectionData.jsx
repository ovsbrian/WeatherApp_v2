import { ContainerCards } from "./Card/ContainerCard";
import { Grafica } from "./Grafica/Grafica";
import { NavTop } from "./NavTop/NavTop";

export const SectionData = () => {
  return (
    <>
      <div className="p-4 flex flex-col gap-8 md:gap-0 justify-center max-h-full">
        <NavTop />
        <ContainerCards />
        <div className="h-64">
          <Grafica />
        </div>
      </div>
    </>
  );
};
