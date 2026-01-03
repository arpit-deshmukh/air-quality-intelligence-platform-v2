import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart({ labels = [], values = [] }) {
  const data = {
    labels,
    datasets: [
      {
        label: "AQI Levels",
        data: values,
        backgroundColor: "#3B82F6",
        borderRadius: 6,
        barThickness: 26,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#F9FAFB",
        bodyColor: "#E5E7EB",
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#374151",
          font: { size: 11, weight: "500" },
        },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E5E7EB" },
        ticks: {
          color: "#6B7280",
          font: { size: 11 },
        },
      },
    },
  };

  return (
    <div className="h-[260px] w-full">
      <Bar data={data} options={options} redraw />
    </div>
  );
}
