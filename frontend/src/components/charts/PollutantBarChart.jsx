import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function PollutantBarChart({ labels, values }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Concentration (µg/m³)",
        data: values,
        backgroundColor: "#4F46E5", // simple blue bars
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
