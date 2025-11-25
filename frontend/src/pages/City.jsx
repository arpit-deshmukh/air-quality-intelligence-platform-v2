import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLiveAQI } from "../api/aqi";
import AQICard from "../components/cards/AQICard";
import BarChart from "../components/charts/BarChart";
import Loader from "../components/common/Loader";

export default function City() {
  const { cityName } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    load();
  }, [cityName]);

  const load = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetchLiveAQI(cityName);
      setData(res);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  if (loading) return <Loader />;
  if (error || !data)
    return (
      <div className="p-6">
        <div className="text-red-600 font-semibold text-lg">
          Could not load data.
        </div>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-3">{data.city}</h1>
      <p className="text-gray-600 mb-6">
        Real-time AQI & pollutant breakdown powered by Open-Meteo.
      </p>

    {/* //main card */}
      <AQICard aqi={data.aqi} city={data.city} />

     {/* //summary */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-5">
        <h2 className="text-xl font-semibold mb-4">Pollutant Breakdown</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: "PM2.5", value: data.pm25 },
            { label: "PM10", value: data.pm10 },
            { label: "NO₂", value: data.no2 },
            { label: "SO₂", value: data.so2 },
            { label: "O₃", value: data.o3 },
            { label: "CO", value: data.co },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg border">
              <div className="text-sm text-gray-600">{item.label}</div>
              <div className="text-xl font-bold">{item.value ?? "N/A"}</div>
            </div>
          ))}
        </div>
      </div>


{/* //chart */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-5">
        <h2 className="text-xl font-semibold mb-4">AQI Trend (Past Hours)</h2>
        <div className="text-gray-400">Chart coming soon...</div>

      </div>
    </div>
  );
}
