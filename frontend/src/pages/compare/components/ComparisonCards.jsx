export default function ComparisonCards() {
  const pollutants = [
    { name: "PM2.5", a: 98, b: 45 },
    { name: "PM10", a: 110, b: 62 },
    { name: "NO₂", a: 33, b: 12 },
    { name: "SO₂", a: 14, b: 7 },
    { name: "O₃", a: 28, b: 40 },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {pollutants.map((p, idx) => (
        <div
          key={idx}
          className="p-5 rounded-xl"
          style={{ background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(51, 65, 85, 0.5)" }}
        >
          <h4 className="font-semibold" style={{ color: "#e2e8f0" }}>{p.name}</h4>
          <div className="mt-3 flex justify-between text-sm" style={{ color: "#94a3b8" }}>
            <span>City A: {p.a}</span>
            <span>City B: {p.b}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
