import { useState } from "react";
import { fetchLiveAQI } from "../api/aqi";
import AQICard from "../components/cards/AQICard";
import Loader from "../components/common/Loader";
import ErrorBox from "../components/common/ErrorBox";

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

      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {data && <AQICard {...data} />}
    </div>
  );
}
