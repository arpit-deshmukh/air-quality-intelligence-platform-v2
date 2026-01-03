export default function CityQuickCard({ city, aqi, onClick }) {
  const getColor = (aqi) => {
    if (!aqi) return "bg-gray-400";
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400 text-black";
    if (aqi <= 200) return "bg-orange-500";
    if (aqi <= 300) return "bg-red-500";
    return "bg-purple-700";
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-xl p-4 cursor-pointer
                 shadow-sm transition-all duration-300
                 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200 anim-fade"
    >
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-sm font-semibold text-gray-900 truncate">
          {city}
        </h2>
        <span
          className={`px-3 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap ${getColor(
            aqi
          )}`}
        >
          {aqi ?? "N/A"}
        </span>
      </div>
    </div>
  );
}
