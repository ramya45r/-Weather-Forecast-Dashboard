import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

const TemperatureChart = ({ city }) => {
  const data = {
    labels: city.forecast.map((day) => day.day),
    datasets: [
      {
        label: "High Temperature (°C)",
        data: city.forecast.map((day) => day.high),
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
      },
      {
        label: "Low Temperature (°C)",
        data: city.forecast.map((day) => day.low),
        borderColor: "blue",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Temperature Trends for ${city.name}`,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TemperatureChart;
