import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineChart({ labels = [], values = [], color = "#6366f1" }) {
  const data = {
    labels,
    datasets: [
      {
        label: "AQI Trend",
        data: values,
        borderColor: color,
        backgroundColor: "rgba(99, 102, 241, 0.15)",
        fill: true,
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: color,
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
    <div className="h-[280px] w-full">
      <Line data={data} options={options} redraw />
    </div>
  );
}
