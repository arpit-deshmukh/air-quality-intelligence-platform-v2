import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLiveAQI } from "../api/aqi";

import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import AQIImage from "./components-general/AQIImage.jsx";

export default function City() {
  const { cityName } = useParams(); // FIXED
  const [data, setData] = useState(null);

  useEffect(() => {
    loadCityAQI();
  }, [cityName]);

  const loadCityAQI = async () => {
    const res = await fetchLiveAQI(cityName);
    setData(res || { aqi: null });
  };
  const getAQICategory = (aqi) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Satisfactory";
    if (aqi <= 200) return "Moderate";
    if (aqi <= 300) return "Poor";
    if (aqi <= 400) return "Very Poor";
    return "Severe";
  };

  const getAQIAdvice = (aqi) => {
    if (aqi <= 50)
      return "Air quality is excellent. Enjoy your outdoor activities!";
    if (aqi <= 100)
      return "Air quality is acceptable. Sensitive groups should take care.";
    if (aqi <= 200)
      return "Limit prolonged outdoor exposure. People with asthma should be cautious.";
    if (aqi <= 300)
      return "Air quality is poor. Avoid outdoor exercise, wear a mask.";
    if (aqi <= 400)
      return "Very poor air quality. Stay indoors and use air purifiers if possible.";
    return "Severe pollution! Avoid going outside completely. Masks + purifiers strongly recommended.";
  };

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-lime-500";
    if (aqi <= 200) return "bg-yellow-500";
    if (aqi <= 300) return "bg-orange-500";
    if (aqi <= 400) return "bg-red-600";
    return "bg-purple-700";
  };


  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{cityName} AQI Details</h1>

      {/* AQI Card */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Current AQI</h2>
        <div className="text-5xl font-bold">{data.aqi ?? "N/A"}</div>
      </div>
      {/* Health Advisory */}
      <div className={`p-6 rounded-xl shadow text-white mb-6 ${getAQIColor(data.aqi)}`}>
        <h2 className="text-xl font-bold mb-2">
          {getAQICategory(data.aqi)} Air Quality
        </h2>
        <p className="text-lg">{getAQIAdvice(data.aqi)}</p>
      </div>
      <AQIImage/>


      {/* Pollutants
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-3">Pollutants</h2>
        <BarChart
          labels={["PM2.5", "PM10", "NO2", "SO2", "CO", "O3"]}
          values={[
            data.pm25 ?? 0,
            data.pm10 ?? 0,
            data.no2 ?? 0,
            data.so2 ?? 0,
            data.co ?? 0,
            data.o3 ?? 0,
          ]}
        />
      </div> */}

      {/* Trend (dummy)
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">AQI Trend</h2>
        <LineChart labels={["1", "2", "3", "4", "5"]} values={[60, 70, 80, 75, 90]} />
      </div> */}
    </div>
  );
}
