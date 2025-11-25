import { useState } from "react";
import { fetchLiveAQI } from "../api/aqi";
import AQICard from "../components/cards/AQICard";

export default function Home() {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);

  const getAQI = async () => {
    try {
      const res = await fetchLiveAQI(city);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Live AQI Dashboard</h1>

      <div className="flex gap-3 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g., Delhi)"
          className="border px-4 py-2 rounded-lg w-60"
        />
        <button
          onClick={getAQI}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Get AQI
        </button>
      </div>

      {data && (
        <AQICard
          city={data.city}
          aqi={data.aqi}
          pm25={data.pm25}
          pm10={data.pm10}
          no2={data.no2}
          so2={data.so2}
          o3={data.o3}
        />
      )}
    </div>
  );
}
