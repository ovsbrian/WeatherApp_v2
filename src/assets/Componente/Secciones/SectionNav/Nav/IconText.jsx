export const IconText = ({ icon, text }) => {
  return (
    <>
      <div className="bg-slate-400 w-full">
        <span>{icon}</span>
        <span>{text}</span>
      </div>
    </>
  );
};
