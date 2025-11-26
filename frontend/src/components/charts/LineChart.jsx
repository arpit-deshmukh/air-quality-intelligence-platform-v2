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

// register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LineChart({ labels = [], values = [], color = "rgba(255,99,132,1)" }) {
  const data = {
    labels,
    datasets: [
      {
        label: "AQI Trend",
        data: values,
        borderColor: color,
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: true,
        tension: 0.3
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  return <Line data={data} options={options} redraw={true} />;
}
