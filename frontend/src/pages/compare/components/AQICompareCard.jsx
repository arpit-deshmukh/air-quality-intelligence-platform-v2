const getColor = (aqi) => {
  if (aqi <= 50) return "bg-green-500";
  if (aqi <= 100) return "bg-yellow-400";
  if (aqi <= 200) return "bg-orange-500";
  if (aqi <= 300) return "bg-red-500";
  if (aqi <= 400) return "bg-purple-600";
  return "bg-rose-800";
};

export default function AQICompareCard({ cityA, cityB }) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-10">
      {[cityA, cityB].map((c, i) => (
        <div key={i} className="p-6 border bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">{c.city}</h3>
          <div className={`px-4 py-2 text-white rounded-lg inline-block ${getColor(c.aqi)}`}>
            AQI: {c.aqi}
          </div>
        </div>
      ))}
    </div>
  );
}
