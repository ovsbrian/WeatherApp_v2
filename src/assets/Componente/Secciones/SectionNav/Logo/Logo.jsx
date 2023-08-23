export const Logo = ({ logo, nombre, url }) => {
  console.log(logo);
  return (
    <>
      <div className="w-full  flex gap-2 items-center h-10 ">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={logo}
            className="h-8 hover:opacity-50 cursor-pointer"
            alt={nombre}
          />
        </a>
        <a href={url} target="_blank" rel="noreferrer">
          <span className="font-semibold hover:opacity-50 cursor-pointer">
            {nombre}
          </span>
        </a>
      </div>
    </>
  );
};
