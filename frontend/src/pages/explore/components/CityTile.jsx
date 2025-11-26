import { Link } from "react-router-dom";

const getColor = (aqi) => {
  if (aqi <= 50) return "bg-green-500";
  if (aqi <= 100) return "bg-yellow-500 text-black";
  if (aqi <= 200) return "bg-orange-500";
  if (aqi <= 300) return "bg-red-500";
  if (aqi <= 400) return "bg-purple-600";
  return "bg-rose-700";
};

export default function CityTile({ data }) {
  return (
    <Link to={`/city/${data.city}`}>
      <div className="cursor-pointer p-5 bg-white rounded-2xl border shadow-sm hover:shadow-lg transition">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{data.city}</h2>

          <div
            className={`px-3 py-1 rounded-lg text-white text-sm ${getColor(
              data.aqi ?? 0
            )}`}
          >
            AQI: {data.aqi ?? "N/A"}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-gray-600">
          <div>PM2.5: {data.pm25 ?? "-"}</div>
          <div>PM10: {data.pm10 ?? "-"}</div>
          <div>NO₂: {data.no2 ?? "-"}</div>
        </div>
      </div>
    </Link>
  );
}
