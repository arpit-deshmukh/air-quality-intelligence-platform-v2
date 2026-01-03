import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LineChart({
  labels = [],
  values = [],
  color = "#3B82F6"
}) {
  const data = {
    labels,
    datasets: [
      {
        label: "AQI Trend",
        data: values,
        borderColor: color,
        backgroundColor: "rgba(59,130,246,0.15)",
        fill: true,
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: color,
      }
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
    <div className="h-[280px] w-full">
      <Line data={data} options={options} redraw />
    </div>
  );
}
