import { useState } from "react";
import { fetchLiveAQI } from "../api/aqi";

const colors = (aqi) => {
  if (aqi <= 50) return "bg-green-500";
  if (aqi <= 100) return "bg-yellow-400";
  if (aqi <= 200) return "bg-orange-500";
  if (aqi <= 300) return "bg-red-500";
  if (aqi <= 400) return "bg-purple-600";
  return "bg-rose-800";
};

export default function Compare() {
  const [cityA, setCityA] = useState("Delhi");
  const [cityB, setCityB] = useState("Mumbai");

  const [dataA, setDataA] = useState(null);
  const [dataB, setDataB] = useState(null);
  const [loading, setLoading] = useState(false);

  const cities = [
    "Delhi","Mumbai","Bangalore","Hyderabad",
    "Kolkata","Chennai","Pune","Ahmedabad"
  ];

  const load = async () => {
    setLoading(true);
    try {
      const [a, b] = await Promise.all([
        fetchLiveAQI(cityA),
        fetchLiveAQI(cityB)
      ]);

      setDataA(a.data);
      setDataB(b.data);
    } finally {
      setLoading(false);
    }
  };

  const winner = () => {
    if (!dataA || !dataB) return null;
    return dataA.aqi < dataB.aqi ? cityA : cityB;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Compare Cities</h1>

      <div className="grid grid-cols-2 gap-4 max-w-xl">
        <select
          className="p-3 border rounded-xl"
          value={cityA} onChange={(e) => setCityA(e.target.value)}
        >
          {cities.map(c => <option key={c}>{c}</option>)}
        </select>

        <select
          className="p-3 border rounded-xl"
          value={cityB} onChange={(e) => setCityB(e.target.value)}
        >
          {cities.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <button
        onClick={load}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl"
      >
        Compare
      </button>

      {loading && (
        <div className="mt-6 text-lg font-semibold text-gray-500">
          Loading…
        </div>
      )}

      {(dataA && dataB) && (
        <>
          <div className="mt-8 text-xl font-semibold">
            🏆 Better Air Quality: <span className="text-blue-600">{winner()}</span>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">

            {/* City A */}
            <div className="bg-white shadow p-5 rounded-xl border">
              <h2 className="text-xl font-semibold">{cityA}</h2>
              
              <span className={`inline-block mt-3 px-4 py-1 text-white rounded-lg ${colors(dataA.aqi)}`}>
                AQI: {dataA.aqi}
              </span>

              <div className="mt-4 space-y-1 text-gray-700">
                <p>PM2.5: {dataA.pm25}</p>
                <p>PM10: {dataA.pm10}</p>
                <p>NO₂: {dataA.no2}</p>
                <p>SO₂: {dataA.so2}</p>
                <p>O₃: {dataA.o3}</p>
                <p>CO: {dataA.co}</p>
              </div>
            </div>

            {/* City B */}
            <div className="bg-white shadow p-5 rounded-xl border">
              <h2 className="text-xl font-semibold">{cityB}</h2>
              
              <span className={`inline-block mt-3 px-4 py-1 text-white rounded-lg ${colors(dataB.aqi)}`}>
                AQI: {dataB.aqi}
              </span>

              <div className="mt-4 space-y-1 text-gray-700">
                <p>PM2.5: {dataB.pm25}</p>
                <p>PM10: {dataB.pm10}</p>
                <p>NO₂: {dataB.no2}</p>
                <p>SO₂: {dataB.so2}</p>
                <p>O₃: {dataB.o3}</p>
                <p>CO: {dataB.co}</p>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}
