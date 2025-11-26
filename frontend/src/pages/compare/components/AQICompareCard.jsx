export default function AQICompareCard({ title, aqi }) {
  return (
    <div className="bg-white p-6 shadow rounded-xl text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold">{aqi || "N/A"}</p>
      <p className="text-gray-500 mt-2">Air Quality Index</p>
    </div>
  );
}
