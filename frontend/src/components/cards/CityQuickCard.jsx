export default function CityQuickCard({ city, aqi, onClick }) {
  const getColor = (aqi) => {
    if (!aqi) return "#64748b";
    if (aqi <= 50) return "#10b981";
    if (aqi <= 100) return "#f59e0b";
    if (aqi <= 200) return "#f97316";
    if (aqi <= 300) return "#ef4444";
    return "#7c3aed";
  };

  return (
    <div
      onClick={onClick}
      className="rounded-xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 anim-fade"
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
      }}
    >
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-sm font-semibold truncate" style={{ color: "#e2e8f0" }}>
          {city}
        </h2>
        <span
          className="px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
          style={{ background: getColor(aqi), color: "#ffffff" }}
        >
          {aqi ?? "N/A"}
        </span>
      </div>
    </div>
  );
}
