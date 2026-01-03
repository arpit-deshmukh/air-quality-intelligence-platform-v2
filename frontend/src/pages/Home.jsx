import { useState } from "react";
import { fetchLiveAQI } from "../api/aqi";
import { cities } from "../data/cities";
import LiveAQIResult from "./home-components/LiveAQIResult";
import PollutantInfoGrid from "./home-components/PollutantInfoGrid";

export default function Home() {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAQI = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetchLiveAQI(city);
      setData(res);
    } catch {
      setError("Could not fetch AQI. Try another city or try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] page-gradient">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center anim-fade">

        <h1 className="text-4xl font-semibold text-blue-900 mb-3">
          Live AQI Dashboard
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Check real-time air quality data and understand the pollutants
          affecting your city.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="
              w-64 rounded-lg border border-gray-300 bg-white
              px-4 py-2 text-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            {cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            onClick={getAQI}
            className="
              rounded-lg bg-blue-600 px-6 py-2 text-white font-medium
              transition-all duration-200
              hover:bg-blue-700 active:scale-95
            "
          >
            Get AQI
          </button>
        </div>

        <LiveAQIResult loading={loading} error={error} data={data} />

        <div className="mt-20">
          <PollutantInfoGrid />
        </div>

      </div>
    </div>
  );
}
