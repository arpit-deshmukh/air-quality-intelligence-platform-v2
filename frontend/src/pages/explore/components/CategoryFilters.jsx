export default function CategoryFilters({ active, setActive }) {
  const tabs = [
    { id: "india", label: "India" },
    { id: "global", label: "Global" },
    { id: "low", label: "Lowest AQI" },
    { id: "high", label: "Highest AQI" }
  ];

  return (
    <div className="flex gap-2 mt-5 flex-wrap anim-fade">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: active === t.id ? "#6366f1" : "rgba(30, 41, 59, 0.6)",
            color: active === t.id ? "#ffffff" : "#94a3b8",
            border: active === t.id ? "1px solid transparent" : "1px solid rgba(51, 65, 85, 0.5)",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
