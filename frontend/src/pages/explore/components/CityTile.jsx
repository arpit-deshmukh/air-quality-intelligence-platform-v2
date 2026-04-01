import { Link } from "react-router-dom";

const getColor = (aqi) => {
  if (aqi <= 50) return "#10b981";
  if (aqi <= 100) return "#f59e0b";
  if (aqi <= 200) return "#f97316";
  if (aqi <= 300) return "#ef4444";
  if (aqi <= 400) return "#7c3aed";
  return "#be123c";
};

export default function CityTile({ data }) {
  return (
    <Link to={`/city/${data.city}`}>
      <div
        className="cursor-pointer p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "rgba(15, 23, 42, 0.7)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>{data.city}</h2>
          <div
            className="px-3 py-1 rounded-lg text-sm font-medium"
            style={{ background: getColor(data.aqi ?? 0), color: "#ffffff" }}
          >
            AQI: {data.aqi ?? "N/A"}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-xs" style={{ color: "#64748b" }}>
          <div>PM2.5: {data.pm25 ?? "-"}</div>
          <div>PM10: {data.pm10 ?? "-"}</div>
          <div>NO₂: {data.no2 ?? "-"}</div>
        </div>
      </div>
    </Link>
  );
}
