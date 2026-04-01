export default function PollutantTable({ city1, city2, data1 = {}, data2 = {} }) {
  const pollutants = [
    { key: "pm25", label: "PM2.5" },
    { key: "pm10", label: "PM10" },
    { key: "no2", label: "NO₂" },
    { key: "so2", label: "SO₂" },
    { key: "co", label: "CO" },
    { key: "o3", label: "O₃" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#e2e8f0" }}>Pollutant Level Comparison</h2>
      <table className="w-full rounded-lg overflow-hidden">
        <thead>
          <tr style={{ background: "rgba(30, 41, 59, 0.6)" }}>
            <th className="p-3 text-left" style={{ color: "#94a3b8" }}>Pollutant</th>
            <th className="p-3 text-left" style={{ color: "#94a3b8" }}>{city1}</th>
            <th className="p-3 text-left" style={{ color: "#94a3b8" }}>{city2}</th>
          </tr>
        </thead>
        <tbody>
          {pollutants.map((p) => (
            <tr key={p.key} style={{ borderTop: "1px solid rgba(51, 65, 85, 0.3)" }}>
              <td className="p-3 font-medium" style={{ color: "#cbd5e1" }}>{p.label}</td>
              <td className="p-3" style={{ color: "#94a3b8" }}>{data1[p.key] ?? "N/A"}</td>
              <td className="p-3" style={{ color: "#94a3b8" }}>{data2[p.key] ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
