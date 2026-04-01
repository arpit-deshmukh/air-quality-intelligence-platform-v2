import { useEffect, useState } from "react";
import { fetchLiveAQI } from "../../api/aqi";
import { cities } from "../../data/cities";

import CitySelect from "./components/CitySelect";
import AQICompareCard from "./components/AQICompareCard";
import ChartCompare from "./components/ChartCompare";
import PollutantTable from "./components/PollutantTable";

export default function ComparePage() {
  const [city1, setCity1] = useState("Delhi");
  const [city2, setCity2] = useState("Mumbai");
  const [aqi1, setAqi1] = useState({});
  const [aqi2, setAqi2] = useState({});

  const normalizePollutants = (p = {}) => ({
    pm25: p.pm2_5 ?? null,
    pm10: p.pm10 ?? null,
    no2: p.nitrogen_dioxide ?? null,
    so2: p.sulphur_dioxide ?? null,
    co: p.carbon_monoxide ?? null,
    o3: p.ozone ?? null,
  });

  useEffect(() => {
    loadAQI();
  }, [city1, city2]);

  const loadAQI = async () => {
    try {
      const c1 = await fetchLiveAQI(city1);
      const c2 = await fetchLiveAQI(city2);
      setAqi1({ aqi: c1?.aqi ?? null, pollutants: normalizePollutants(c1?.pollutants) });
      setAqi2({ aqi: c2?.aqi ?? null, pollutants: normalizePollutants(c2?.pollutants) });
    } catch (err) {
      console.error("ComparePage Error:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 anim-fade">
      <header className="mb-10 anim-slide-up">
        <h1 className="text-3xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>
          AQI City Comparison
        </h1>
        <p className="max-w-xl" style={{ color: "#94a3b8" }}>
          Compare air quality levels, trends, and pollutant composition between two cities.
        </p>
      </header>

      <div
        className="rounded-xl p-6 mb-10 transition-all duration-300 anim-slide-up"
        style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
      >
        <CitySelect city1={city1} city2={city2} setCity1={setCity1} setCity2={setCity2} cities={cities} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 anim-slide-up">
        <AQICompareCard title={city1} aqi={aqi1?.aqi} />
        <AQICompareCard title={city2} aqi={aqi2?.aqi} />
      </div>

      <div
        className="rounded-xl p-6 mb-16 transition-all duration-300 anim-slide-up"
        style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
      >
        <ChartCompare city1={city1} city2={city2} aqi1={aqi1?.aqi} aqi2={aqi2?.aqi} />
      </div>

      <div
        className="rounded-xl p-6 transition-all duration-300 anim-slide-up"
        style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
      >
        <PollutantTable city1={city1} city2={city2} data1={aqi1.pollutants} data2={aqi2.pollutants} />
      </div>
    </div>
  );
}
