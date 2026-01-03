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
        backgroundColor: "#3B82F6",
        borderRadius: 6,
        barThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#374151",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 11,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#1F2937",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
    },
  };

  return (
    <div className="h-[320px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
