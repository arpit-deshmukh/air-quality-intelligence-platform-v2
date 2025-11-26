export default function CategoryFilters({ active, setActive }) {
  const tabs = [
    { id: "india", label: "India" },
    { id: "global", label: "Global" },
    { id: "low", label: "Lowest AQI" },
    { id: "high", label: "Highest AQI" }
  ];

  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            active === t.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
