import { Logo } from "./Logo/Logo";
import imgLogo from "../../../imgs/logo.png";
import { ContainerIconText } from "./Nav/ContainerIcoNText";
import { System } from "./System/System";

export const SectionNav = () => {
  return (
    <>
      <div className="h-full p4  flex flex-col justify-between">
        <div >
          <Logo
            logo={imgLogo}
            nombre={"ovsbrian"}
            url={"https://ovsbrian.github.io/"}
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
