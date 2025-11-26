export default function SuggestionsBox({ list }) {
  if (!list || list.length === 0)
    return <div className="text-gray-500 mt-4">No suggestions found.</div>;

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {list
        .filter(item => item && item.city)
        .map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{item.city}</h3>
            <p className="text-sm text-gray-600">
              AQI: {item?.aqi ?? "N/A"}
            </p>
          </div>
        ))}
    </div>
  );
}
