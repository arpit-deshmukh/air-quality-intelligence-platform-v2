import { Bar } from "react-chartjs-2";

export default function DifferenceBarChart({ cityA, cityB }) {
  const pollutants = ["PM2.5", "PM10", "NO₂", "SO₂", "O₃", "CO"];

  const data = {
    labels: pollutants,
    datasets: [
      {
        label: cityA.city,
        data: [cityA.pm25, cityA.pm10, cityA.no2, cityA.so2, cityA.o3, cityA.co],
      },
      {
        label: cityB.city,
        data: [cityB.pm25, cityB.pm10, cityB.no2, cityB.so2, cityB.o3, cityB.co],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      <h3 className="text-xl font-semibold mb-4">Pollutant Comparison Chart</h3>
      <Bar data={data} />
    </div>
  );
}
