export default function PollutantBars() {
  const items = [
    { label: "PM2.5", a: 98, b: 45 },
    { label: "PM10", a: 110, b: 62 },
    { label: "NO₂", a: 33, b: 12 },
  ];

  return (
    <div className="bg-white p-6 shadow rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Pollutant Levels</h2>

      {items.map((item, i) => (
        <div key={i} className="my-3">
          <div className="flex justify-between text-sm mb-1">
            <span>{item.label}</span>
            <span>A: {item.a} | B: {item.b}</span>
          </div>

          <div className="flex gap-2">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${item.a * 0.8}px` }}
            ></div>
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${item.b * 0.8}px` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
