import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLiveAQI } from "../api/aqi";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";

export default function City() {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, [name]);

  const load = async () => {
    const res = await fetchLiveAQI(name);
    setData(res || { aqi: null });
  };

  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{name} AQI Details</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Current AQI</h2>
        <div className="text-5xl font-bold">{data.aqi ?? "N/A"}</div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-3">Pollutants</h2>
        <BarChart
          labels={["PM2.5", "PM10", "NO2", "SO2", "CO", "O3"]}
          values={[
            data.pm25 ?? 0,
            data.pm10 ?? 0,
            data.no2 ?? 0,
            data.so2 ?? 0,
            data.co ?? 0,
            data.o3 ?? 0,
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">AQI Trend</h2>
        <LineChart
          labels={["1", "2", "3", "4", "5"]}
          values={[60, 70, 80, 75, 90]}
        />
      </div>
    </div>
  );
}
