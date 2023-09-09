import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
    y: {
     
      grid: {
        display: false,
      },
     
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
   
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
const beneficios = [1, 3, 1, -2];
 
const data = {
  labels,
  datasets: [
    {
      pointRadius: 8,
      pointBackgroundColor: "rgba(53, 162, 235)",
      tension: 0.4,
      fill: true,
      data: beneficios,
      borderColor: "rgb(21, 53, 110)",
      backgroundColor: "rgb(21, 53, 110,0.1)",
      
    },
 
  ],
};

export const Grafica = () => {
  return (
    <>
      <div className="w-full h-80 flex justify-center items-center ">
        <Line options={options} data={data} />
      </div>
    </>
  );
};
