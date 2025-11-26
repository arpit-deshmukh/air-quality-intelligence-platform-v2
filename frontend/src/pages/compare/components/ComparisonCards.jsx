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
        <div key={idx} className="bg-white shadow p-5 rounded-xl">
          <h4 className="font-semibold text-gray-800">{p.name}</h4>
          <div className="mt-3 flex justify-between text-sm text-gray-600">
            <span>City A: {p.a}</span>
            <span>City B: {p.b}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
