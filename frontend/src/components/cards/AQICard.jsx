export default function AQICard({ city, aqi, pm25, pm10, no2, so2, o3, co }) {
  const getColor = (aqi) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400 text-black";
    if (aqi <= 200) return "bg-orange-500";
    if (aqi <= 300) return "bg-red-500";
    if (aqi <= 400) return "bg-purple-600";
    return "bg-rose-800";
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6 w-full max-w-xl
                    shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md anim-fade">
      <div className="flex justify-between items-start gap-4">
        <h2 className="text-xl font-semibold text-gray-900 leading-tight">
          {city}
        </h2>

        <div
          className={`px-4 py-1.5 rounded-lg text-sm font-medium text-white whitespace-nowrap ${getColor(
            aqi
          )}`}
        >
          AQI {aqi}
        </div>
      </div>

      <div className="h-px bg-gray-100 my-5" />

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div className="flex justify-between text-gray-700">
          <span>PM2.5</span>
          <span className="font-medium">{pm25}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>PM10</span>
          <span className="font-medium">{pm10}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>NO₂</span>
          <span className="font-medium">{no2}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>SO₂</span>
          <span className="font-medium">{so2}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>O₃</span>
          <span className="font-medium">{o3}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>CO</span>
          <span className="font-medium">{co}</span>
        </div>
      </div>
    </div>
  );
}
