import "./App.css";
import { SectionData } from "./assets/Componente/Secciones/SectionData/SectionData";
import { SectionNav } from "./assets/Componente/Secciones/SectionNav/SectionNav";

function App() {
  return (
    <>
      <div className="bg-[#EAEBEC] min-w-full min-h-screen flex justify-center items-center">
        <div className="bg-slate-50 w-5/6 h-[600px] flex shadow-2xl">
          <div className="bg-slate-200 w-1/6 h-full p-4"><SectionNav/></div>
          <div className="bg-[#EEF2F4] w-3/6 h-full"><SectionData/></div>
          <div className="bg-blue-gradient w-2/6"></div>
        </div>
      </div>
    </>
  );
}

export default App;
