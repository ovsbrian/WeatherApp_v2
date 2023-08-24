import { LogOut, Settings } from "lucide-react";
import { IconText } from "../Nav/IconText";

export const System = () => {
  return (
    <>
      <div className="flex flex-col gap-4 opacity-100">
        <span className="font-semibold ">System</span>
        <IconText icon={<Settings/>} text={'Setting'}  />
        <IconText icon={<LogOut />} text={'Logout account'} state={true}  />
      </div>
    </>
  );
};
