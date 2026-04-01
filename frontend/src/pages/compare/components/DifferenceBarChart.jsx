import { Bar } from "react-chartjs-2";

export default function DifferenceBarChart({ cityA, cityB }) {
  const pollutants = ["PM2.5", "PM10", "NO₂", "SO₂", "O₃", "CO"];

  const data = {
    labels: pollutants,
    datasets: [
      {
        label: cityA.city,
        data: [cityA.pm25, cityA.pm10, cityA.no2, cityA.so2, cityA.o3, cityA.co],
        backgroundColor: "#6366f1",
        borderRadius: 4,
      },
      {
        label: cityB.city,
        data: [cityB.pm25, cityB.pm10, cityB.no2, cityB.so2, cityB.o3, cityB.co],
        backgroundColor: "#10b981",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div
      className="p-6 rounded-xl mb-10"
      style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
    >
      <h3 className="text-xl font-semibold mb-4" style={{ color: "#e2e8f0" }}>Pollutant Comparison Chart</h3>
      <Bar data={data} />
    </div>
  );
}
