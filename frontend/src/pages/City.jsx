import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLiveAQI } from "../api/aqi";

import AQIImage from "./components-general/AQIImage.jsx";
import PollutantBarChart from "../components/charts/PollutantBarChart";

export default function City() {
  const { cityName } = useParams();
  const [data, setData] = useState(null);

  // load aqi
  useEffect(() => {
    loadCityAQI();
  }, [cityName]);

  const loadCityAQI = async () => {
    const res = await fetchLiveAQI(cityName);
    setData(res || { aqi: null });
  };

  // aqi category
  const getAQICategory = (aqi) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Satisfactory";
    if (aqi <= 200) return "Moderate";
    if (aqi <= 300) return "Poor";
    if (aqi <= 400) return "Very Poor";
    return "Severe";
  };

  // aqi advice
  const getAQIAdvice = (aqi) => {
    if (aqi <= 50) return "Air quality is excellent. Enjoy your outdoor activities!";
    if (aqi <= 100) return "Air quality is acceptable. Sensitive groups should take care.";
    if (aqi <= 200) return "Limit prolonged outdoor exposure. People with asthma should be cautious.";
    if (aqi <= 300) return "Air quality is poor. Avoid outdoor exercise, wear a mask.";
    if (aqi <= 400) return "Very poor air quality. Stay indoors and use air purifiers if possible.";
    return "Severe pollution! Avoid going outside completely. Masks + purifiers strongly recommended.";
  };

  // aqi color
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-lime-500";
    if (aqi <= 200) return "bg-yellow-500";
    if (aqi <= 300) return "bg-orange-500";
    if (aqi <= 400) return "bg-red-600";
    return "bg-purple-700";
  };

  // pollutant category
  const getPollutantCategory = (name, value) => {
    if (value == null) return "N/A";

    const breakpoints = {
      "PM2.5": [30, 60, 90, 120, 250],
      "PM10": [50, 100, 250, 350, 430],
      "NO₂": [40, 80, 180, 280, 400],
      "SO₂": [40, 80, 380, 800, 1600],
      "CO": [1, 2, 10, 17, 34],
      "O₃": [50, 100, 168, 208, 748],
    };

    const labels = ["Good", "Satisfactory", "Moderate", "Poor", "Very Poor", "Severe"];
    const limits = breakpoints[name];

    for (let i = 0; i < limits.length; i++) {
      if (value <= limits[i]) return labels[i];
    }

    return labels[labels.length - 1];
  };

  // category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "Good": return "bg-green-500 text-white";
      case "Satisfactory": return "bg-lime-500 text-white";
      case "Moderate": return "bg-yellow-400 text-black";
      case "Poor": return "bg-orange-500 text-white";
      case "Very Poor": return "bg-red-600 text-white";
      case "Severe": return "bg-purple-700 text-white";
      default: return "bg-gray-400 text-white";
    }
  };

  // pollutant meanings
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
      meaning: "Colorless gas from incomplete combustion (vehicles, generators).",
      source: "Traffic, stoves, heating systems, industrial burners.",
      health: "Reduces oxygen supply; causes dizziness and headaches.",
      guidance: "Avoid enclosed parking areas; avoid heavy traffic exposure."
    },
    "O₃": {
      meaning: "Ground-level ozone formed by sunlight reacting with pollutants.",
      source: "Strong sunlight + traffic emissions; common in warm afternoons.",
      health: "Causes coughing, throat irritation, and chest discomfort.",
      guidance: "Avoid outdoor activities in the afternoon; pollution is highest then."
    }
  };

  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{cityName} AQI Details</h1>

      {/* aqi card */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer">
        <h2 className="text-xl font-semibold mb-3">Current AQI</h2>
        <div className="text-5xl font-bold mb-4">{data.aqi ?? "N/A"}</div>

        {/* pollutant mini badges */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            ["PM2.5", data.pm25],
            ["PM10", data.pm10],
            ["NO₂", data.no2],
            ["SO₂", data.so2],
            ["CO", data.co],
            ["O₃", data.o3],
          ].map(([name, value]) => {
            const category = getPollutantCategory(name, value);
            const color = getCategoryColor(category);

            return (
              <div key={name} className="flex justify-between items-center">
                <span className="font-medium">{name}: {value ?? "N/A"}</span>
                <span className={`px-2 py-1 rounded-lg text-xs ${color}`}>
                  {category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* health box */}
      <div className={`p-6 rounded-xl shadow text-white mb-6 ${getAQIColor(data.aqi)}`}>
        <h2 className="text-xl font-bold mb-2">{getAQICategory(data.aqi)} Air Quality</h2>
        <p className="text-lg">{getAQIAdvice(data.aqi)}</p>
      </div>

      <AQIImage />

      {/* pollutant bar */}
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
    <br/>
    <br/>
      {/* pollutant info */}
      <div className="bg-grey p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Pollutant Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["PM2.5", data.pm25],
            ["PM10", data.pm10],
            ["NO₂", data.no2],
            ["SO₂", data.so2],
            ["CO", data.co],
            ["O₃", data.o3],
          ].map(([name, value]) => {
            const info = pollutantInfo[name];

            return (
              <div key={name} className="p-4 border rounded-lg bg-gray-50 transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer">
                <div className="flex justify-between mb-2">
                  <p className="text-lg font-semibold">{name}</p>
                  <p className="text-md font-bold">{value ?? "N/A"}</p>
                </div>

                <p className="text-gray-700 text-sm"><b>Meaning:</b> {info.meaning}</p>
                <p className="text-gray-700 text-sm mt-1"><b>Sources:</b> {info.source}</p>
                <p className="text-gray-700 text-sm mt-1"><b>Health:</b> {info.health}</p>
                <p className="text-gray-900 text-sm font-semibold mt-2"><b>Guidance:</b> {info.guidance}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
