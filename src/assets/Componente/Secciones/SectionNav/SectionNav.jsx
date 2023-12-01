import { Logo } from "./Logo/Logo";
import imgLogo from "/logo.png";
import { ContainerIconText } from "./Nav/ContainerIcoNText";
import { System } from "./System/System";

export const SectionNav = () => {
  return (
    <>
      <div className="hidden h-full md:flex flex-col p-4 justify-between">
        <div >
          <Logo
            logo={imgLogo}
            nombre={"ovsbrian"}
            url={"https://www.ovsbrian.me"}
          />
          <ContainerIconText />
        </div>
        <div className="p-2">
          <System />
        </div>
      </div>
    </>
  );
};
