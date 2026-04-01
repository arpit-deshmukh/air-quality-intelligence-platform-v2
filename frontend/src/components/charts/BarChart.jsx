import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
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
        backgroundColor: "#6366f1",
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
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        titleColor: "#f1f5f9",
        bodyColor: "#cbd5e1",
        padding: 10,
        borderColor: "rgba(51, 65, 85, 0.5)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#94a3b8", font: { size: 11, weight: "500" } },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(51, 65, 85, 0.3)" },
        ticks: { color: "#64748b", font: { size: 11 } },
      },
    },
  };

  return (
    <div className="h-[260px] w-full">
      <Bar data={data} options={options} redraw />
    </div>
  );
}
