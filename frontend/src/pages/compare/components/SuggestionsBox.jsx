export default function SuggestionsBox({ list }) {
  if (!list || list.length === 0) {
    return <div className="mt-4" style={{ color: "#64748b" }}>No suggestions found.</div>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {list
        .filter((item) => item && item.city)
        .map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl transition-all duration-300"
            style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
          >
            <h3 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>{item.city}</h3>
            <p className="text-sm" style={{ color: "#94a3b8" }}>AQI: {item?.aqi ?? "N/A"}</p>
          </div>
        ))}
    </div>
  );
}
