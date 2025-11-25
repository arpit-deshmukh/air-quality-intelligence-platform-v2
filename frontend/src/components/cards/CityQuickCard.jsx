export default function CityQuickCard({ city, aqi, onClick }) {
  const getColor = (aqi) => {
    if (!aqi) return "bg-gray-400";
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400";
    if (aqi <= 200) return "bg-orange-500";
    if (aqi <= 300) return "bg-red-500";
    return "bg-purple-700";
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md p-4 rounded-xl border hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{city}</h2>
        <span className={`text-white px-3 py-1 rounded-lg text-sm ${getColor(aqi)}`}>
          {aqi ?? "N/A"}
        </span>
      </div>
    </div>
  );
}
