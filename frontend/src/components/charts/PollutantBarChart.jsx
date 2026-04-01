import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function PollutantBarChart({ labels, values }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Concentration (µg/m³)",
        data: values,
        backgroundColor: "#6366f1",
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
        grid: { display: false },
        ticks: { color: "#94a3b8", font: { size: 12, weight: "500" } },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(51, 65, 85, 0.3)" },
        ticks: { color: "#64748b", font: { size: 11 } },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#e2e8f0", font: { size: 12, weight: "500" } },
      },
    },
  };

  return (
    <div className="h-[320px] w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
