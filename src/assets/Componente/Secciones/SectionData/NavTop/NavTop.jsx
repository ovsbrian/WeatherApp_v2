import { Search, User } from "lucide-react";
import { IconCuadrado } from "./IconCuadrado";

export const NavTop = () => {
  return (
    <>
      <div className="w-full md:flex flex flex-col items-center md:flex-row justify-between gap-4  ">
        <div className="flex flex-col   ">
          <span className="text-xl font-semibold">Jaunary 2022</span>
          <span className="text-xs">Thursday, Jan 4, 2022</span>
        </div>
        <div className="flex">
          <div className="flex items-start w-64 h-16 rounded">
            <Search className="pl-1 ml-1 mt-2 absolute" size={24} />
            <input
              className="w-full h-10 bg-[rgb(214,232,241,0.51)]"
              type="text"
            ></input>
          </div>
          <div className="flex gap-4 px-4">
            <IconCuadrado icon={<User />} />
            <IconCuadrado icon={<User />} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
