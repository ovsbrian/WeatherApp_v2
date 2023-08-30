export const ProgressBar = ({ value }) => {
  if (value < 5) {
    value = 5;
  }
  return (
    <div className="w-full bg-[#294163] h-10 rounded-2xl">
      <div
        className="h-full bg-[#8cb1fc] rounded-2xl"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
