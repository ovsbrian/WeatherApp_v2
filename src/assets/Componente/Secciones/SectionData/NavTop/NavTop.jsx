import { Search, User } from "lucide-react";
import { IconCuadrado } from "./IconCuadrado";

export const NavTop = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center  ">
        <div className="flex flex-col ">
          <span className="text-xl font-semibold">Jaunary 2022</span>
          <span className="text-xs">Thursday, Jan 4, 2022</span>
        </div>
        <div className="flex ">
          <div className="flex items-center w-64 h-16 p-4 rounded">
            <Search className="pl-1 absolute" size={24} />
            <input className="w-full h-full" type="text"></input>
          </div>
          <div className="flex items-center gap-4 px-4">
            <IconCuadrado icon={<User />} />
            <IconCuadrado icon={<User />} />
          </div>
        </div>
        
      </div>
      <hr/>
    </>
  );
};
