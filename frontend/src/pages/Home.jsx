import { useState } from "react";
import { fetchLiveAQI } from "../api/aqi";
import AQICard from "../components/cards/AQICard";
import Loader from "../components/common/Loader";
import ErrorBox from "../components/common/ErrorBox";

import { cities } from "../data/cities"; 

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
    } catch (err) {
      setError("Could not fetch AQI. Try another city or try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-4 bg-gray-100 ">
      <div className="w-full max-w-xl text-center">

        <h1 className="text-3xl font-bold mb-5">Live AQI Dashboard</h1>

  {/* dropdown button */}
        <div className="flex gap-3 justify-center mb-5">

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border px-4 py-2 rounded-lg w-60 bg-white"
          >
            {cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            onClick={getAQI}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Get AQI
          </button>
        </div>
{/* loader error result */}
        {loading && <Loader />}

        {error && <ErrorBox message={error} />}

        {data && (
          <div className="flex justify-center">
            <AQICard {...data} />
          </div>
        )}
      </div>
      
    </div>
  );
}
