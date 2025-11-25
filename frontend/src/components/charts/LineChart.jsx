import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function LineChart({ labels, data, title }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: title,
              data,
              borderColor: "rgb(37, 99, 235)",
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.3
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { maxTicksLimit: 8 } }
          }
        }}
      />
    </div>
  );
}
