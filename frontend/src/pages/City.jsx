import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLiveAQI } from "../api/aqi";

import AQIImage from "./components-general/AQIImage.jsx";
import PollutantBarChart from "../components/charts/PollutantBarChart";

export default function City() {
  const { cityName } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLiveAQI(cityName).then((res) =>
      setData(res || { aqi: null })
    );
  }, [cityName]);

  if (!data) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-center anim-fade" style={{ color: "#94a3b8" }}>
        Loading city air quality…
      </div>
    );
  }

  const getAQICategory = (aqi) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Satisfactory";
    if (aqi <= 200) return "Moderate";
    if (aqi <= 300) return "Poor";
    if (aqi <= 400) return "Very Poor";
    return "Severe";
  };

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "#10b981";
    if (aqi <= 100) return "#84cc16";
    if (aqi <= 200) return "#f59e0b";
    if (aqi <= 300) return "#f97316";
    if (aqi <= 400) return "#ef4444";
    return "#7c3aed";
  };

  const pollutantInfo = {
    "PM2.5": {
      meaning: "Fine inhalable particles that penetrate deep into the lungs.",
      source: "Vehicle exhaust, biomass burning, dust, and construction.",
      health: "Triggers asthma, reduces lung function, causes long-term respiratory issues.",
      guidance: "Avoid outdoor exercise; wear a mask; keep windows closed during rush hours."
    },
    "PM10": {
      meaning: "Coarse dust particles that irritate the eyes, nose, and throat.",
      source: "Road dust, construction, soil, and industrial activity.",
      health: "Short-term breathing discomfort; worsens asthma.",
      guidance: "Avoid dusty roads; consider wearing a mask outdoors."
    },
    "NO₂": {
      meaning: "Toxic gas mainly produced from vehicles and industrial activity.",
      source: "Traffic congestion, diesel vehicles, power plants.",
      health: "Reduces lung function and worsens asthma.",
      guidance: "Avoid main roads during peak traffic hours."
    },
    "SO₂": {
      meaning: "Gas produced from burning coal and industrial activities.",
      source: "Thermal power plants, factories, and fuel combustion.",
      health: "Irritates eyes and throat; harmful for people with asthma.",
      guidance: "Asthma patients should stay indoors."
    },
    "CO": {
      meaning: "Colorless gas from incomplete combustion.",
      source: "Traffic, stoves, heaters, industrial burners.",
      health: "Reduces oxygen supply; causes dizziness and headaches.",
      guidance: "Avoid enclosed parking areas; avoid heavy traffic exposure."
    },
    "O₃": {
      meaning: "Ground-level ozone formed by sunlight reacting with pollutants.",
      source: "Strong sunlight and traffic emissions.",
      health: "Causes coughing, throat irritation, and chest discomfort.",
      guidance: "Avoid outdoor activities during afternoon hours."
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 anim-fade">
      <h1 className="text-3xl font-semibold mb-10" style={{ color: "#e2e8f0" }}>
        {cityName} Air Quality Overview
      </h1>

      <div
        className="rounded-xl overflow-hidden mb-12 transition-all duration-300"
        style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
      >
        <div className="px-6 py-3 font-medium" style={{ background: "rgba(99, 102, 241, 0.1)", color: "#a5b4fc" }}>
          Current AQI
        </div>
        <div className="p-6">
          <div className="text-5xl font-semibold mb-6" style={{ color: "#f1f5f9" }}>
            {data.aqi ?? "N/A"}
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ["PM2.5", data.pm25],
              ["PM10", data.pm10],
              ["NO₂", data.no2],
              ["SO₂", data.so2],
              ["CO", data.co],
              ["O₃", data.o3],
            ].map(([name, value]) => (
              <div key={name} className="flex justify-between" style={{ color: "#94a3b8" }}>
                <span>{name}</span>
                <span className="font-medium" style={{ color: "#e2e8f0" }}>{value ?? "N/A"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="rounded-xl px-6 py-5 mb-14 anim-slide-up"
        style={{ background: getAQIColor(data.aqi), color: "#ffffff" }}
      >
        <h2 className="text-xl font-semibold mb-1" style={{ color: "#ffffff" }}>
          {getAQICategory(data.aqi)} Air Quality
        </h2>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
          Health advisory based on current air quality levels.
        </p>
      </div>

      <AQIImage />

      <div
        className="mt-16 rounded-xl p-6 transition-all duration-300"
        style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
      >
        <PollutantBarChart
          labels={["PM2.5", "PM10", "NO₂", "SO₂", "CO", "O₃"]}
          values={[
            data.pm25 ?? 0, data.pm10 ?? 0,
            data.no2 ?? 0, data.so2 ?? 0,
            data.co ?? 0, data.o3 ?? 0,
          ]}
        />
      </div>

      <div className="mt-20">
        <h2 className="section-title mb-8" style={{ color: "#e2e8f0" }}>
          Pollutant Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(pollutantInfo).map(([name, info]) => (
            <div
              key={name}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
            >
              <div className="px-4 py-2 flex justify-between items-center" style={{ background: "rgba(30, 41, 59, 0.6)" }}>
                <h3 className="font-semibold" style={{ color: "#e2e8f0" }}>{name}</h3>
                <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                  {data[name.toLowerCase().replace(".", "")] ?? "N/A"}
                </span>
              </div>
              <div className="p-4 text-sm space-y-1.5" style={{ color: "#94a3b8" }}>
                <p><b style={{ color: "#cbd5e1" }}>Meaning:</b> {info.meaning}</p>
                <p><b style={{ color: "#cbd5e1" }}>Sources:</b> {info.source}</p>
                <p><b style={{ color: "#cbd5e1" }}>Health:</b> {info.health}</p>
                <p className="pt-1 text-xs font-medium" style={{ color: "#a5b4fc" }}>
                  Guidance: {info.guidance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
