export const CityHour = ({ city, country, hour }) => {
  return (
    <>
      <div className="flex w-full mb-8">
        <div className="w-full">
          <div className="flex justify-start items-start w-full">
            <span className="text-xl font-semibold text-white">{city}</span>
          </div>
          <span className="text-white opacity-60">{country}</span>
        </div>
        <div className="flex justify-end items-center w-full">
          <span className="text-xl text-white">{hour}</span>
        </div>
      </div>
    </>
  );
};
