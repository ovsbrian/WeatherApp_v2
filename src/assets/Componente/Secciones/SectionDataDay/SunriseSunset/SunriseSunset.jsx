import { Moon, Sun } from "lucide-react";
import { Card } from "../../SectionData/Card/Card";

export const Twilight = ({ sunrise, sunset }) => {
  return (
    <>
      <Card
        date={"4:20 AM"}
        icon={<Sun />}
        refe={"in 6 hours"}
        tipe={"Sunrise"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
        h={'md:h-24'}
      />
      <Card
        date={"5:20 PM"}
        h={'md:h-24'}
        icon={<Moon />}
        refe={"in 9 hours"}
        tipe={"Sunset"}
        bg={"bg-[#2D4C86]"}
        colorText={"text-white"}
        radius={"rounded"}
      />
    </>
  );
};
