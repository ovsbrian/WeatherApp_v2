import "./App.css";
import { SectionData } from "./assets/Componente/Secciones/SectionData/SectionData";
import { SectionDay } from "./assets/Componente/Secciones/SectionDataDay/SectionDay";
import { SectionNav } from "./assets/Componente/Secciones/SectionNav/SectionNav";

function App() {
  return (
    <>
      <div className="bg-[#EAEBEC] min-w-full min-h-screen flex justify-center items-center select-none overflow-x-hidden">
        <div className="bg-slate-50 w-full md:w-5/6 md:h-[800px] flex flex-col md:flex-row shadow-2xl ">
          <div className="bg-slate-200 md:w-1/6 h-full md:p-4"><SectionNav/></div>
          <div className="bg-[#EEF2F4] md:w-3/6 h-full"><SectionData/></div>
          <div className="bg-blue-gradient md:w-2/6"><SectionDay/></div>
        </div>
      </div>
    </>
  );
}

export default App;
