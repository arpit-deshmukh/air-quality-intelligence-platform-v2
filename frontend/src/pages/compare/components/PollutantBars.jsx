export default function PollutantBars() {
  const items = [
    { label: "PM2.5", a: 98, b: 45 },
    { label: "PM10", a: 110, b: 62 },
    { label: "NO₂", a: 33, b: 12 },
  ];

  return (
    <div
      className="p-6 rounded-xl"
      style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
    >
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#e2e8f0" }}>Pollutant Levels</h2>
      {items.map((item, i) => (
        <div key={i} className="my-3">
          <div className="flex justify-between text-sm mb-1" style={{ color: "#94a3b8" }}>
            <span>{item.label}</span>
            <span>A: {item.a} | B: {item.b}</span>
          </div>
          <div className="flex gap-2">
            <div className="h-2 rounded" style={{ width: `${item.a * 0.8}px`, background: "#6366f1" }} />
            <div className="h-2 rounded" style={{ width: `${item.b * 0.8}px`, background: "#10b981" }} />
          </div>
        </div>
      ))}
    </div>
  );
}
