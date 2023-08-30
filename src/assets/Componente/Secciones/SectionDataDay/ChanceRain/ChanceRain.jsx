import { ProgressBar } from "./ProgressBar";

export const Chancerain = ({hour, chance}) => {
  return (
    <>
      <div className="w-full flex gap-4 justify-center items-center text-white">
        <span className="w-20">{hour} PM</span>
        <ProgressBar value={chance} />
        <span className="w-20">{chance} %</span>
      </div>
    </>
  );
};
