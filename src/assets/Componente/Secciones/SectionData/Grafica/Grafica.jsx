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
import { useWeatherData } from "../../../../Hook/useWeatherData";

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
const DataGrafica = (infoGrados) => {
  let labels = []
  let temp = []

  for (let i = 0; i < 4; i++) {
    let grados = Math.round(infoGrados[i].main.temp - 273.15);
    temp.push(grados);

    let dt_txt = infoGrados[i].dt_txt;
    let time = dt_txt.split(" ")[1];
    let hourAndMinutes = time.split(":").slice(0, 2).join(":");
    labels.push(hourAndMinutes);
  }

  const data = {
    labels,
    datasets: [
      {
        pointRadius: 8,
        pointBackgroundColor: "rgba(53, 162, 235)",
        tension: 0.4,
        fill: true,
        data: temp,
        borderColor: "rgb(21, 53, 110)",
        backgroundColor: "rgb(21, 53, 110,0.1)",
      },
    ],
  };
  return data;
};

export const Grafica = () => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;
  let infoGrados = weatherData.forecastWeather.list;

  const data = DataGrafica(infoGrados);
  return (
    <>
      <div className="w-full h-full mt-16 md:mt-2">
        <Line options={options} data={data} />
      </div>
    </>
  );
};
