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
      <div className="max-w-5xl mx-auto px-6 py-16 text-center text-gray-500 anim-fade">
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
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-lime-500";
    if (aqi <= 200) return "bg-yellow-500";
    if (aqi <= 300) return "bg-orange-500";
    if (aqi <= 400) return "bg-red-600";
    return "bg-purple-700";
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
      <h1 className="text-3xl font-semibold text-blue-900 mb-10">
        {cityName} Air Quality Overview
      </h1>

      <div className="rounded-xl border border-gray-300 bg-white overflow-hidden mb-12 hover:shadow-md transition">
        <div className="px-6 py-3 bg-blue-50 text-blue-900 font-medium">
          Current AQI
        </div>

        <div className="p-6">
          <div className="text-5xl font-semibold text-gray-900 mb-6">
            {data.aqi ?? "N/A"}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            {[
              ["PM2.5", data.pm25],
              ["PM10", data.pm10],
              ["NO₂", data.no2],
              ["SO₂", data.so2],
              ["CO", data.co],
              ["O₃", data.o3],
            ].map(([name, value]) => (
              <div key={name} className="flex justify-between">
                <span>{name}</span>
                <span className="font-medium">{value ?? "N/A"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`rounded-xl px-6 py-5 mb-14 text-white transition-all ${getAQIColor(data.aqi)} anim-slide-up`}>
        <h2 className="text-xl font-semibold mb-1">
          {getAQICategory(data.aqi)} Air Quality
        </h2>
        <p className="text-sm opacity-90">
          Health advisory based on current air quality levels.
        </p>
      </div>

      <AQIImage />

      <div className="mt-16 rounded-xl border border-gray-300 bg-white p-6 hover:shadow-md transition">
        <PollutantBarChart
          labels={["PM2.5", "PM10", "NO₂", "SO₂", "CO", "O₃"]}
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

      <div className="mt-20">
        <h2 className="section-title mb-8">
          Pollutant Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(pollutantInfo).map(([name, info]) => (
            <div
              key={name}
              className="rounded-xl border border-gray-300 bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="px-4 py-2 bg-gray-50 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <span className="text-sm font-medium text-gray-700">
                  {data[name.toLowerCase().replace(".", "")] ?? "N/A"}
                </span>
              </div>

              <div className="p-4 text-sm text-gray-700 space-y-1.5">
                <p><b>Meaning:</b> {info.meaning}</p>
                <p><b>Sources:</b> {info.source}</p>
                <p><b>Health:</b> {info.health}</p>
                <p className="pt-1 text-xs font-medium text-blue-900">
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
