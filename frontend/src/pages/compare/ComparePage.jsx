import { useEffect, useState } from "react";


import { fetchLiveAQI } from "../../api/aqi";
import { cities } from "../../data/cities";

import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";

export default function Compare() {
  const [city1, setCity1] = useState("Delhi");
  const [city2, setCity2] = useState("Mumbai");

  const [aqi1, setAqi1] = useState(null);
  const [aqi2, setAqi2] = useState(null);

  useEffect(() => {
    loadData();
  }, [city1, city2]);

  const loadData = async () => {
    const c1 = await fetchLiveAQI(city1);
    const c2 = await fetchLiveAQI(city2);

    setAqi1(c1 || { aqi: null });
    setAqi2(c2 || { aqi: null });
  };

  const barValues = [aqi1?.aqi || 0, aqi2?.aqi || 0];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Compare Cities</h1>

      {/* Dropdowns */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <select
          className="p-3 border rounded-lg"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          className="p-3 border rounded-lg"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
        >
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* AQI Comparison Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">AQI Comparison</h2>
        <BarChart labels={[city1, city2]} values={barValues} />
      </div>

      {/* Trend Comparison (Dummy) */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Trend Comparison (Dummy)
        </h2>
        <LineChart
          labels={["1", "2", "3", "4", "5"]}
          values={[50, 70, 90, 60, 80]}
        />
      </div>
    </div>
  );
}
