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
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${
              active === t.id
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
