import { useState } from "react";

export const IconText = ({ icon, text, state }) => {
  
  const [focus, setFocus] = useState(state);
  
  const cambiarFocus = () => {
    setFocus(!focus);
  };

  return (
    <>
      <div
        className={` flex w-full items-center gap-1  ${
          focus == true ? "opacity-100" : "opacity-50"
        }`}
        onClick={cambiarFocus}
      >
        <div className="w-8 hover:opacity-50 cursor-pointer ">{icon}</div>
        <span className="text-base font-semibold hover:opacity-100 cursor-pointer w-full ">
          {text}
        </span>
      </div>
    </>
  );
};
