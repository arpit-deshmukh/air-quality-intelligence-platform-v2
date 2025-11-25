export default function AQICard({ city, aqi, pm25, pm10, no2, so2, o3 }) {
  const getColor = (aqi) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400";
    if (aqi <= 200) return "bg-orange-500";
    if (aqi <= 300) return "bg-red-500";
    if (aqi <= 400) return "bg-purple-600";
    return "bg-rose-800";
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-100 w-full max-w-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{city}</h2>
        <div className={`text-white px-4 py-2 rounded-lg ${getColor(aqi)}`}>
          AQI: {aqi}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-700">
        <p><span className="font-medium">PM2.5:</span> {pm25}</p>
        <p><span className="font-medium">PM10:</span> {pm10}</p>
        <p><span className="font-medium">NO₂:</span> {no2}</p>
        <p><span className="font-medium">SO₂:</span> {so2}</p>
        <p><span className="font-medium">O₃:</span> {o3}</p>
      </div>
    </div>
  );
}
